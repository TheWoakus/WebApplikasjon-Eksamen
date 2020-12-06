import express from 'express';
import { officeController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', officeController.get);
router.get('/', officeController.list);
router.post('/', officeController.create);
router.put('/:id', officeController.update);
router.delete('/:id', officeController.remove);

export default router;
