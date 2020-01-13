import { GET_CARDS, SHOW_CARDS, RESET_FILTERS, IS_FILTERED } from './types';

import { CHANGE_CURRENCY } from '../currency/types';

const initialState = {
  data: [],
  show: [],
  filter: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, data: action.payload };
    case SHOW_CARDS:
      return { ...state, show: action.payload };
    case RESET_FILTERS:
      return { ...state, show: action.payload };
    case CHANGE_CURRENCY:
      return { ...state, show: action.payload };
    case IS_FILTERED:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
