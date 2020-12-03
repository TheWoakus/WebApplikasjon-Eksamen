import polls from '../../data/polls.js';
import * as helpers from '../../utils/helpers.js';

export const listPolls = () => {
  if (polls.size === 0) {
    return { status: 200, data: 'No polls' };
  }

  return { status: 200, data: Object.fromEntries(polls) };
};

export const get = (id) => {
  const pollItem = helpers.findId(polls, id);
  if (pollItem.error) return pollItem;

  return { status: 200, data: pollItem };
};

export const create = (poll) => {
  const { ...data } = poll;
  if (!data) {
    return { status: 200, data: 'No poll created' };
  }
  const newID = helpers.createID(polls);
  polls.set(newID, data);
  return { status: 200, data: Object.fromEntries(polls) };
};

export const update = (poll) => {
  const { id, ...data } = poll;
  const pollItem = helpers.findId(polls, id);
  if (pollItem.error) return pollItem;
  polls.set(id, data);
  return { status: 200, data: polls.get(id) };
};

export const remove = (id) => {
  const pollItem = helpers.findId(polls, id);
  if (pollItem.error) return pollItem;
  polls.delete(id);
  return { status: 200, data: true };
};
