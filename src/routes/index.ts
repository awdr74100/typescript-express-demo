import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const router = Router();

router.get('/products', productController.find);
router.get('/products/:id', productController.findOne);
router.post('/products', productController.insertOne);
router.patch('/products/:id', productController.updateOne);
router.delete('/products/:id', productController.deleteOne);

export default router;
