import config from 'config';
import mongoose from 'mongoose';
import Joi from 'joi';
import JoiPC from 'joi-password-complexity';

import jwt from 'jsonwebtoken';

import validator from 'validator';
import constants from '../constants/index.js';

const account = constants.account;

const accountSchema = new mongoose.Schema({
  firstName: {
    type: mongoose.Schema.Types.String,
    max: 32,
    required: true,
  },
  lastName: {
    type: mongoose.Schema.Types.String,
    max: 32,
    required: true,
  },
  username: {
    type: mongoose.Schema.Types.String,
    max: 64,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    max: 64,
    validate: [validator.isEmail, 'Invalid Email'],
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
    min: 8,
    max: 2048,
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: Date.now(),
  },
  firstTime: {
    type: mongoose.Schema.Types.Boolean,
    default: true,
  },
  accountStatus: {
    type: mongoose.Schema.Types.String,
    default: account.ACCOUNT_STATUS.ACTIVE,
  },
  profile: {
    bio: {
      type: mongoose.Schema.Types.String,
      default: '',
      max: 64,
    },
    address: {
      type: mongoose.Schema.Types.String,
      default: '',
      max: 128,
    },
    schoolName: {
      type: mongoose.Schema.Types.String,
      max: 128,
    },
    currentGrade: {
      type: mongoose.Schema.Types.Number,
      min: 7,
      max: 12,
    },
  },
  userId: mongoose.Schema.Types.ObjectId,
  role: {
    type: mongoose.Schema.Types.String,
    default: account.ACCOUNT_ROLE.BASIC,
  },
});

accountSchema.methods.generateAuthToken = function () {
  console.log('Config pass', config.get('jwtPrivateKey'));
  const token = jwt.sign(
    {
      _id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      userId: this.userId,
      role: this.role,
    },
    config.get('jwtPrivateKey')
    // { algorithm: 'RS256' },
    // function (error, token) {
    //   console.log('Error', error);
    //   console.log('TOKEN Gen', token);
    // }
  );
  return token;
};

const Account = mongoose.model('Account', accountSchema);

function validateAccount(account) {
  //customerId: Joi.objectId().required(),
  const complexityOptions = {
    min: 8,
    max: 64,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };

  const schema = Joi.object({
    firstName: Joi.string().max(32).required(),
    lastName: Joi.string().max(32).required(),
    username: Joi.string().max(64).required(),
    email: Joi.string().email().max(64).required(),
    password: new JoiPC(complexityOptions),
    profile: Joi.object({
      bio: Joi.string().max(64),
      address: Joi.string().max(128),
      schoolName: Joi.string().max(128),
      currentGrade: Joi.number().max(7).max(12),
    }),
    //userId: Joi.string().hex().length(24),
  });

  return schema.validate(account, { abortEarly: false });
}

export default {
  Account,
  validateAccount,
};
