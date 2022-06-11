import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';

export default function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: true, message: 'Invalid Id!' });

  next();
}
