import axios from 'axios';

import config from '../../config.json';

const { apiUrl } = config;
const TOKEN_KEY = 'token';
const BACKEND_URL = apiUrl + '/auth';

// to authorize user - i.e login
export const loginAPI = async (username, password) => {
  try {
    const { data } = await axios.post(BACKEND_URL, { username, password });
    // localStorage.setItem(TOKEN_KEY, response.token);
    saveToken(data.token);
    console.log('response,', data);
    return data;
  } catch (error) {
    const { data } = error.response;
    if (data.error) {
      // console.error('Error', error.response.data);
      return data;
    }
    return error;
  }
};

// to sign out the user, so it has to login again.
export const logoutAPI = async (username, password) => {
  localStorage.removeItem(TOKEN_KEY);
};

// to sign out the user, so it has to login again.
export const saveToken = async (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
