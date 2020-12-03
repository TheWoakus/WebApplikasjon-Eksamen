import {
  listPolls,
  get,
  create,
  update,
  remove,
} from '../../models/poll/index.js';

export const getPolls = (req, res) => {
  const { status, data } = listPolls();
  res.status(status).json({ status, data });
};

export const getPoll = (req, res) => {
  const { id } = req.params;
  const { error, status, data } = get(id);
  res.status(status).json({
    status,
    data,
    params: id,
    error,
  });
};

export const createPoll = (req, res) => {
  const { ...poll } = req.body;
  const { status, error, data } = create(poll);
  res.status(status).json({
    status,
    error,
    data,
  });
};

export const updatePoll = (req, res) => {
  const { ...poll } = req.body;
  const { id } = req.params;
  const { status, error, data } = update({ id, ...poll });
  res.status(status).json({
    status,
    error,
    data,
  });
};

export const deletePoll = (req, res) => {
  const { id } = req.params;
  const { status, error, data } = remove(id);
  res.status(status).json({
    status,
    error,
    data,
  });
};
