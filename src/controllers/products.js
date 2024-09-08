import { getAllProducts } from '../services/products.js';
export const getAllProductController = async (reg, res) => {
  const data = await getAllProducts();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};
