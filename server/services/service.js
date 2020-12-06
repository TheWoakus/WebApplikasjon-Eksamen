import Request from '../models/request.js';

export const getRequestById = async (id) => Request.findById(id);

export const listRequests = async () => Request.find();

export const createRequest = async (data) => Request.create(data);

export const updateRequest = async (id, data) =>
  Request.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeRequest = async (id) => {
  const request = await Request.findById(id);
  request.remove();
};
