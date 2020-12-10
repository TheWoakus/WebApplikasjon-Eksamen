import express from 'express';
import { StatController } from '../controllers/index.js';

const router = express.Router();

router.get('/stats', StatController.get);
router.post('/stats', StatController.createOrUpdate);

export default router;
