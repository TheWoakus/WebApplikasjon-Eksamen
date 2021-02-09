import http from './http.js';

export const registrer = async (credentials) => {
  try {
    return await http.post('/registrer', { ...credentials });
  } catch (err) {
    return err.response;
  }
};
