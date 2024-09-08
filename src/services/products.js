import { ProductModel } from '../db/Product.js';
export const getAllProducts = async () => {
  return await ProductModel.find();
};

export const getProductById = async (productId) => {
  const product = await ProductModel.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  return await ProductModel.create(payload);
};

export const updateProduct = async (productId, payload) => {
  return await ProductModel.findOneAndUpdate({ _id: productId }, payload, {
    new: true,
  });
};

export const deleteProduct = async (productId) => {
  const product = await ProductModel.findOneAndDelete({ _id: productId });
  return product;
};
