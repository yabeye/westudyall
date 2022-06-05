import * as api from '../api/account.api.js';

import actions from '../actionTypes/index.js';
import { makeAppStopLoading } from './isLoading.js';

const { CREATE_NEW_ACCOUNT, GET_MY_ACCOUNT } = actions;

export const createNewAccount = () => async (dispatch) => {
  try {
    const { data } = await api.createNewAccountAPI();
    const action = { type: CREATE_NEW_ACCOUNT, payload: data.account };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMyAccount = () => async (dispatch) => {
  try {
    const { data } = await api.getMyAccountAPI();
    // TODO: Change the userId to actual user!
    const action = { type: GET_MY_ACCOUNT, payload: data.account };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
  //   dispatch(makeAppStopLoading());
};
