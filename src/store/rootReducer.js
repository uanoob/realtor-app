import { combineReducers } from 'redux';
import property from './property/reducer';
import currency from './currency/reducer';
import auth from './auth/reducer';

export default combineReducers({
  auth,
  property,
  currency,
});
