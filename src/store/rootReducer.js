import { combineReducers } from 'redux';
import property from './property/reducer';
import currency from './currency/reducer';

export default combineReducers({
  property,
  currency,
});
