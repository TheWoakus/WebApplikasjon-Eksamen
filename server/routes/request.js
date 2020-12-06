import express from 'express';
import { requestController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', requestController.get);
router.get('/', requestController.list);
router.post('/', requestController.create);
router.put('/:id', requestController.update);
router.delete('/:id', requestController.remove);

export default router;
