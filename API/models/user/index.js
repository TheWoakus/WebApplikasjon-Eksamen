import users from '../../data/users.js';
import * as helpers from '../../utils/helpers.js';

export const listUsers = () => {
  if (users.size === 0) {
    return { status: 200, data: 'No users' };
  }

  return { status: 200, data: Object.fromEntries(users) };
};

export const get = (id) => {
  const userItem = helpers.findId(users, id);
  if (userItem.error) return userItem;

  return { status: 200, data: userItem };
};

export const create = (user) => {
  const { ...data } = user;
  if (!data) {
    return { status: 200, data: 'No poll created' };
  }
  const newID = helpers.createID(users);
  users.set(newID, data);
  return { status: 200, data: Object.fromEntries(users) };
};

export const update = (poll) => {
  const { id, ...data } = poll;
  const userItem = helpers.findId(users, id);
  if (userItem.error) return userItem;
  users.set(id, data);
  return { status: 200, data: users.get(id) };
};

export const remove = (id) => {
  const userItem = helpers.findId(users, id);
  if (userItem.error) return userItem;
  users.delete(id);
  return { status: 200, data: true };
};
