import http from './http.js';

export const getUserInfo = async () => {
  try {
    return await http.get('/me');
  } catch (error) {
    return error.response;
  }
};

export const login = async (credentials) => {
  try {
    return await http.post('/login', { ...credentials });
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    return await http.post('/logout');
  } catch (error) {
    return error.response;
  }
};
