import { Router } from 'express';
import {
  getAllProductController,
  getProductByIdController,
  createProductController,
  udateProductController,
  deleteProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  productsValidationSchema,
  productValidationSchemaUpdate,
} from '../validation/products.js';
import { validateId } from '../middlewares/validateId.js';

const router = Router();
router.get('/products', ctrlWrapper(getAllProductController));

router.get(
  '/products/:productId',
  validateId,
  ctrlWrapper(getProductByIdController),
);

router.post(
  '/products',
  validateBody(productsValidationSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/products/:productId',
  validateId,
  validateBody(productValidationSchemaUpdate),
  ctrlWrapper(udateProductController),
);

router.delete(
  '/products/:productId',
  validateId,
  ctrlWrapper(deleteProductController),
);

export default router;
