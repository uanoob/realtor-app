import {
  GET_CURRENCY_USD,
  GET_CURRENCY_EUR,
  SET_CURRENCY_SIGN,
  CLEAR_CURRENCY_SIGN,
} from './types';

const initialState = {
  usd: {},
  eur: {},
  sign: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_USD:
      return { ...state, usd: action.payload };
    case GET_CURRENCY_EUR:
      return { ...state, eur: action.payload };
    case SET_CURRENCY_SIGN:
      return { ...state, sign: action.payload };
    case CLEAR_CURRENCY_SIGN:
      return { ...state, sign: action.payload };
    default:
      return state;
  }
};
