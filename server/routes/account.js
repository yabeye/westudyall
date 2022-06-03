import express from 'express';
import ipware from 'ipware';
import bcrypt from 'bcrypt';
import _ from 'lodash';

import { StatusCodes } from 'http-status-codes';

// import ModelAccount from '../models/account.js';
// import ModelUser from '../models/user.js';
import { ModelAccount, ModelUser } from '../models/index.js';

import { auth, admin } from '../middlewares/index.js';

import { SECURITY } from '../constants/index.js';

const get_ip = ipware().get_ip;

const router = express.Router();
const { Account, validateAccount } = ModelAccount;
const { User } = ModelUser;
const { SALT_ROUND } = SECURITY;

router.get('/', [auth, admin], async (req, res) => {
  try {
    const accounts = await Account.find({});
    return res.send({ error: false, accounts });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: true, message: error });
  }
});

// Returns the current logged in user
// TODO: change the route to /me
router.get('/me', auth, async (req, res) => {
  // TODO: exception handling on this route
  const account = await Account.findById(req.account._id).select('-password');

  if (!account) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: true, message: "A user with a given id isn't found!" });
  }

  const user = await User.find({ _id: account.userId });

  let safeAccountResponse = _.pick(account, [
    'firstName',
    'lastName',
    'username',
    'email',
    'createdAt',
    'firstTime',
    'accountStatus',
    'profile',
    'userId',
    'role',
    '_id',
  ]);
  safeAccountResponse.userId = user;

  return res.send({ error: false, account: safeAccountResponse });
});

router.post('/', async (req, res) => {
  // TODO: exception handling on this route
  // request validation validation
  const { body } = req;
  let { firstName, lastName, username, email, password, profile } = body;
  // (to be on the safe side )
  firstName = firstName.trim();
  lastName = lastName.trim();
  username = username.trim();
  email = email.trim();
  // ! password -> we don't trim pass because it might start with whitespace
  profile.bio = profile.bio.trim();
  profile.address = profile.address.trim();
  profile.schoolName = profile.schoolName.trim();

  const { error } = validateAccount({
    firstName,
    lastName,
    username,
    email,
    password,
    profile,
  });

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: 'true',
      details: error.details.map((detail) => detail.message),
    });
  }

  // To prevent users from creating too many fake accounts
  const dupUser = await Account.findOne({ email });
  if (dupUser)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('User with the same email address is already registered.');

  // Get the ip address of the user
  // * Used to track the user and analyze network traffic as a whole
  const lastClientIpAddress = get_ip(req).clientIp;

  const hashedPassword = await bcrypt.hash(
    password,
    await bcrypt.genSalt(SALT_ROUND)
  );

  // creating a new Account
  let user = new User({
    last: {
      ip: lastClientIpAddress,
      active: Date.now(),
    },
  });

  await user.save();
  // Manually set up properties for security reasons
  // ! alien properties might get saved otherwise!
  let newAccount = new Account({
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
    profile,
    userId: user._id,
  });

  await newAccount.save();

  const token = await newAccount.generateAuthToken();
  const safeAccountResponse = _.pick(newAccount, [
    'firstName',
    'lastName',
    'username',
    'email',
    'createdAt',
    'firstTime',
    'accountStatus',
    'profile',
    'userId',
    'role',
    '_id',
  ]);

  return res.header('x-auth-token', token).send({
    error: false,
    account: safeAccountResponse,
  });

  /*
  * Example new account response from postman

    200 - response
    {
    "error": false,
    "account": {
        "firstName": "Abel",
        "lastName": "Mulugeta",
        "username": "abel",
        "email": "abel@gmali.com",
        "createdAt": "2022-06-03T17:31:43.984Z",
        "firstTime": true,
        "accountStatus": "ACTIVE",
        "profile": {
            "bio": "Passionate Student.",
            "address": "Addis Ababa, Ethiopia.",
            "schoolName": "Menilik Secondary School.",
            "currentGrade": 7
        },
        "userId": "629a458430ad4940c06db37e",
        "role": "BASIC",
        "_id": "629a458430ad4940c06db380"
    }
}
    */
});

export default router;
