import config from 'config';
import { StatusCodes } from 'http-status-codes';

import { ACCOUNT } from '../constants/index.js';

export default function (req, res, next) {
  if (!config.get('requiresAuth')) return next();

  // 403 Forbidden - if the user is not an admin
  if (req.account.role !== ACCOUNT.ACCOUNT_ROLE.ADMIN)
    return res
      .status(StatusCodes.FORBIDDEN)
      .send({ error: true, message: 'Access denied.' });

  next();
}
