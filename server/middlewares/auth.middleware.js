import jwt from 'jsonwebtoken';
import config from 'config';
import { StatusCodes } from 'http-status-codes';

export default function (req, res, next) {
  if (!config.get('requiresAuth')) return next();

  const token = req.header('x-auth-token');
  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ error: true, message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.account = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ error: true, message: 'Invalid token.' });
  }
}
