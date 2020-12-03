import Poll from '../models/poll.js';

export const createPoll = async (data) => Poll.create(data);

export const getPoll = async (id) => Poll.get(id);

export const updatePoll = async (data) => Poll.update(data);

export const deletePoll = async (id) => Poll.delete(id);