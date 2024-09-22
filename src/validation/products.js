import Joi from 'joi';
import { categoryProductsList } from '../constants/products.js';

export const productsValidationSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string()
    .valid(...categoryProductsList)
    .required(),
  description: Joi.string(),
});

export const productValidationSchemaUpdate = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  category: Joi.string().valid(...categoryProductsList),
  description: Joi.string(),
});
