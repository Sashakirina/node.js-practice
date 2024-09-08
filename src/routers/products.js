import { Router } from 'express';
import {
  getAllProductController,
  getProductByIdController,
  createProductController,
  udateProductController,
  deleteProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.get('/products', ctrlWrapper(getAllProductController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

router.post('/products', ctrlWrapper(createProductController));

router.patch('/products/:productId', ctrlWrapper(udateProductController));

router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;
