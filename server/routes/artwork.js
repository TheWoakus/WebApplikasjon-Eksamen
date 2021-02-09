import express from 'express';
import { artworkController } from '../controllers/index.js';

const router = express.Router();

router.get('/', artworkController.list);
router.post('/', artworkController.create);

export default router;
