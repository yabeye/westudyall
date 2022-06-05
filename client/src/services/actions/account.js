import * as api from '../api/account.api.js';

import actions from '../actionTypes/index.js';
import { makeAppStopLoading } from './isLoading.js';

const { CREATE_NEW_ACCOUNT, GET_MY_ACCOUNT } = actions;

export const createNewAccount = (accountPayload) => async (dispatch) => {
  try {
    console.log('Acccount Payload', accountPayload);
    // TODO: validation is required here for accountPayload
    const { data } = await api.createNewAccountAPI(accountPayload);
    console.log('response', data);
    const action = { type: CREATE_NEW_ACCOUNT, payload: data.account };
    // console.log('actions createNewAccount');
    dispatch(action);
  } catch (error) {
    console.log('Err, account not created! Reason= - > ', error.message);
  }
};

export const getMyAccount = () => async (dispatch) => {
  try {
    const { data } = await api.getMyAccountAPI();
    // TODO: Change the userId to actual user!
    // console.log('my account payload', data.account);
    if (data.account === undefined) {
      // dispatch({ type: 'IGNORE' });
      return;
    }
    const action = { type: GET_MY_ACCOUNT, payload: data.account };

    dispatch(action);
  } catch (error) {
    // console.log('error is called here!!!');
    dispatch({ type: 'IGNORE' });
    // console.log('on actions error', error);
  }
  dispatch(makeAppStopLoading());
  //   dispatch(makeAppStopLoading());
};
