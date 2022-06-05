import actions from '../actionTypes/index.js';

const { APP_LOADING, APP_NOT_LOADING } = actions;

export default (isLoading = true, action) => {
  switch (action.type) {
    case APP_LOADING:
      return true;
    case APP_NOT_LOADING:
      return false;
    default:
      return false;
  }
};
