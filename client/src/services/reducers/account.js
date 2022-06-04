import actions from '../actionTypes/index.js';

const { CREATE_NEW_ACCOUNT, GET_MY_ACCOUNT } = actions;

export default (account = {}, action) => {
  switch (action.type) {
    case CREATE_NEW_ACCOUNT:
      return action.payload;
    case GET_MY_ACCOUNT:
      return account;
    default:
      return account;
  }
};
