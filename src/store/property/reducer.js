import {
  GET_CARDS,
  SHOW_CARDS,
  RESET_FILTERS,
  IS_FILTERED,
  FILTER_BY_ROOM,
  FILTER_BY_RATING,
  FILTER_BY_PRICE_MAX,
  FILTER_BY_PRICE_MIN,
  SET_FILTER,
} from './types';

import { CHANGE_CURRENCY } from '../currency/types';

const initialState = {
  data: [],
  show: [],
  filters: {
    roomQuantity: '',
    priceMin: '',
    priceMax: '',
    rating: '',
  },
  filter: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, data: action.payload };
    case SHOW_CARDS:
      return { ...state, show: action.payload };
    case RESET_FILTERS:
      return {
        ...state,
        filters: {
          roomQuantity: '',
          priceMin: '',
          priceMax: '',
          rating: '',
        },
      };
    case CHANGE_CURRENCY:
      return { ...state, show: action.payload };
    case IS_FILTERED:
      return { ...state, filter: action.payload };
    case SET_FILTER:
      return {
        ...state,
        filters: { ...state.filters, [action.payload.name]: action.payload.value },
      };
    case FILTER_BY_ROOM:
      return {
        ...state,
        show: state.data.filter(item => item.total_rooms === action.payload),
        filter: true,
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        show: state.data.filter(item => item.rating === action.payload),
        filter: true,
      };
    case FILTER_BY_PRICE_MAX:
      return {
        ...state,
        show: state.data.filter(item => item.price <= action.payload),
        filter: true,
      };
    case FILTER_BY_PRICE_MIN:
      return {
        ...state,
        show: state.data.filter(item => item.price > action.payload),
        filter: true,
      };
    default:
      return state;
  }
};
