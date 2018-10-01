import {
  GET_CURRENCY_USD,
  GET_CURRENCY_EUR,
  CHANGE_CURRENCY,
} from '../actions/types';

const initialState = {
  usd: {},
  eur: {},
  list: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY_USD:
      return { ...state, usd: action.payload };
    case GET_CURRENCY_EUR:
      return { ...state, eur: action.payload };
    case CHANGE_CURRENCY:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
