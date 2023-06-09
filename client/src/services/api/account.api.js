import axios from 'axios';

import { getToken } from './auth.api';
import config from '../../config.json';

const { apiUrl } = config;

const BACKEND_URL = apiUrl + '/account';

// to create a new account - i.e signup
export const createNewAccountAPI = async (accountPayload) => {
  try {
    const { data } = await axios.post(BACKEND_URL, accountPayload);
    return { data };
  } catch (error) {
    console.log('Error herhhdlf', error.response);
    const { data } = error.response;
    return data;
  }
};

// to get info about the current user account
export const getMyAccountAPI = async () => {
  try {
    const token = getToken();

    const instance = axios.create({
      baseURL: BACKEND_URL,
      headers: { 'x-auth-token': token },
      timeout: 5000,
    });

    const result = await instance.get('/me');

    return result;
  } catch (error) {
    const data = error.response;
    console.log('Error', data);
    return data;
  }
};
