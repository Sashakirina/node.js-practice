import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  const { productId } = req.params;

  if (!isValidObjectId(productId)) {
    throw createHttpError(400, 'Id is not valid');
  }
  next();
};
