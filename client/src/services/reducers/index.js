import { combineReducers } from 'redux';
import account from './account';
import isLoading from './isLoading';

export default combineReducers({
  account,
  isLoading,
});
