import actions from '../actionTypes/index.js';

const { APP_LOADING, APP_NOT_LOADING } = actions;

export const makeAppLoading = () => async (dispatch) => {
  // console.log('actions makeAppLoading');
  const action = { type: APP_LOADING };
  dispatch(action);
};

export const makeAppStopLoading = () => async (dispatch) => {
  // console.log('actions makeAppStopLoading');
  const action = { type: APP_NOT_LOADING };
  dispatch(action);
};
