import createHttpError from 'http-errors';
import {
  getAllProducts,
  getProductById,
  createProduct,
} from '../services/products.js';
export const getAllProductController = async (reg, res) => {
  const data = await getAllProducts();
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
