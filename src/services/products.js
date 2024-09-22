import { ProductModel } from '../db/Product.js';

export const getAllProducts = async (filter = {}) => {
  const productsQuery = ProductModel.find();

  if (filter.category) {
    productsQuery.where('category').equals(filter.category);
  }
  if (filter.minPrice) {
    productsQuery.where('price').gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productsQuery.where('price').lte(filter.maxPrice);
  }

  return await productsQuery;
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
