import express from 'express';
import { articleController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', articleController.get);
router.get('/', articleController.list);

/*
router.post(
  '/',
  [isAuthenticated, isAuthorized('admin', 'super')],
  articleController.create
);
*/

router.post('/', articleController.create);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.remove);

export default router;
