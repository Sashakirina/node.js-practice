import { ProductModel } from '../db/Product.js';
export const getAllProducts = async () => {
  return await ProductModel.find();
};
