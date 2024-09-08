import { ProductModel } from '../db/Product.js';
export const getAllProducts = async () => {
  return await ProductModel.find();
};


export const getProductById = async (productId) => {
  const product = await ProductModel.findById(productId);
  return product;
}
