import express from 'express';
import ipware from 'ipware';
import bcrypt from 'bcrypt';
import _ from 'lodash';

import { StatusCodes } from 'http-status-codes';

import ModelAccount from '../models/account.js';
import ModelUser from '../models/user.js';

import SECURITY from '../constants/security.js';

const get_ip = ipware().get_ip;

const router = express.Router();
const { Account, validateAccount } = ModelAccount;
const { User } = ModelUser;
const { SALT_ROUND } = SECURITY;

// TODO: Protect this router latter
// TODO: only for admin
router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {});

// TODO: exception handling on this route
router.post('/', async (req, res) => {
  // request validation validation
  const { body } = req;
  const { error } = validateAccount(body);

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: 'true',
      details: error.details.map((detail) => detail.message),
    });
  }

  const { firstName, lastName, username, email, password, profile } = body;

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
