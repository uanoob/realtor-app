import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import currencyReducer from './currencyReducer';

export default combineReducers({
  card: cardReducer,
  currency: currencyReducer,
});
