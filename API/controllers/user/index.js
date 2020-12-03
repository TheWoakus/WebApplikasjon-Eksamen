import {
  listUsers,
  get,
  create,
  update,
  remove,
} from '../../models/user/index.js';

export const getUsers = (req, res) => {
  const { status, data } = listUsers();
  res.status(status).json({ status, data });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const { error, status, data } = get(id);
  res.status(status).json({
    status,
    error,
    data,
    params: id,
  });
};

export const createUser = (req, res) => {
  const { ...user } = req.body;
  const { status, error, data } = create(user);
  res.status(status).json({
    status,
    error,
    data,
  });
};

export const updateUser = (req, res) => {
  const { ...user } = req.body;
  const { id } = req.params;
  const { status, error, data } = update({ id, ...user });
  res.status(status).json({
    status,
    error,
    data,
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const { status, error, data } = remove(id);
  res.status(status).json({
    status,
    error,
    data,
  });
};
