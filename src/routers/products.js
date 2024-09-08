import { Router } from 'express';
import { getAllProductController, getProductByIdController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.get('/products', ctrlWrapper(getAllProductController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

export default router;
