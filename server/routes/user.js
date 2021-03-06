import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.get('/', userController.list);

export default router;
