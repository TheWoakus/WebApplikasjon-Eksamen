import http from './http.js';

const API_URL_DOWNLOAD = '/download';
const API_URL_UPLOAD = '/upload';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append('image', image);
    return await http.post(`${API_URL_UPLOAD}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    return err.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_URL_DOWNLOAD}/${id}`);
  } catch (err) {
    return err.response;
  }
};
