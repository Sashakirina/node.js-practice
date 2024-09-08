import { Router } from 'express';
import { getAllProductController } from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.get('/products', ctrlWrapper(getAllProductController));

export default router;
