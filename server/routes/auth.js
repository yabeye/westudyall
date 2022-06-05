import express from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';

import { ModelAccount } from '../models/index.js';

const router = express.Router();

const { Account, validateAccount } = ModelAccount;

router.post('/', async (req, res) => {
  // console.log('Auth body, ', req.body);
  const { username, password } = req.body;
  const { error } = validate({ username, password });

  if (error)
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: true,
      message: error.details[0].message,
    });

  const account = await Account.findOne({ username });
  if (!account)
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: true,
      message: 'Username not found.',
    });

  const validPassword = await bcrypt.compare(password, account.password);
  if (!validPassword)
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: true,
      message: 'Password is incorrect',
    });

  const token = account.generateAuthToken();
  return res.send({ error: false, token: token });
});

function validate(credential) {
  const schema = Joi.object({
    username: Joi.string().max(64).required(),
    password: Joi.string().min(8).max(64).required(),
  });

  return schema.validate(credential);
}

export default router;
