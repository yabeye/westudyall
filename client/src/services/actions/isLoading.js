import actions from '../actionTypes/index.js';

const { APP_LOADING, APP_NOT_LOADING } = actions;

export const makeAppLoading = () => async (dispatch) => {
  const action = { type: APP_LOADING, payload: true };
  dispatch(action);
};

export const makeAppStopLoading = () => async (dispatch) => {
  const action = { type: APP_NOT_LOADING, payload: false };
  dispatch(action);
};
