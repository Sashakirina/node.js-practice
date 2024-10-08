import createHttpError from 'http-errors';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/products.js';

import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductController = async (req, res) => {
  console.log(req.query);
  const filter = parseFilterParams(req.query);

  const data = await getAllProducts(filter);
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.json({
    status: 200,
    message: 'Successfully found product with id {productId}!',
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const udateProductController = async (reg, res) => {
  const { productId } = reg.params;
  const product = await updateProduct(productId, reg.body);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(204).send();
};
