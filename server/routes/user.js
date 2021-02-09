import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.get('/', userController.list);
router.post('/', userController.create);

export default router;
