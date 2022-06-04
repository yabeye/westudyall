import axios from 'axios';
import config from '../../config.json';

const { apiUrl } = config;
const TOKEN_KEY = 'token';
const BACKEND_URL = apiUrl + '/auth';

// to authorize user - i.e login
export const loginAPI = async (username, password) => {
  try {
    const { data } = await axios.post(BACKEND_URL, { username, password });
    localStorage.setItem(TOKEN_KEY, data.token);
  } catch (error) {
    console.error('Error', error);
  }
};

// to sign out the user, so it has to login again.
export const logoutAPI = async (username, password) => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
