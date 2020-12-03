import express from 'express';
import {
  getPolls,
  getPoll,
  createPoll,
  updatePoll,
  deletePoll,
} from '../controllers/poll/index.js';

const router = express.Router();

router.get('/', getPolls);
router.get('/:id', getPoll);
router.post('/', createPoll);
router.put('/:id', updatePoll);
router.delete('/:id', deletePoll);

export default router;
