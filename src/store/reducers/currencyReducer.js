import {
  GET_CURRENCY_USD,
  GET_CURRENCY_EUR,
} from '../actions/types';

const initialState = {
  usd: {},
  eur: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCY_USD:
      return { ...state, usd: action.payload };
    case GET_CURRENCY_EUR:
      return { ...state, eur: action.payload };
    default:
      return state;
  }
}
