import {
  GET_CARDS,
  RESET_FILTERS,
  SET_FILTER,
} from './types';

import { CHANGE_CURRENCY } from '../currency/types';

const initialState = {
  data: [],
  filters: {
    roomQuantity: null,
    priceMin: null,
    priceMax: null,
    rating: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, data: action.payload };
    case RESET_FILTERS:
      return {
        ...state,
        filters: {
          roomQuantity: null,
          priceMin: null,
          priceMax: null,
          rating: null,
        },
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        show: state.data.map(item => ({ ...item, price: Math.floor(item.price / action.payload) })),
      };
    case SET_FILTER:
      return {
        ...state,
        filters: { ...state.filters, [action.payload.name]: action.payload.value },
      };
    default:
      return state;
  }
};
