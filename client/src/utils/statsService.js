import http from './http.js';

const API_URL = '/stats';
export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (err) {
    return err.response.data;
  }
};

export const report = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    return err.response.data;
  }
};
