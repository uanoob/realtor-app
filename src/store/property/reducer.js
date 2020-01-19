import { GET_CARDS, RESET_FILTERS, SET_FILTER } from './types';

const initialState = {
  data: [],
  filters: {
    roomQuantity: null,
    priceMin: null,
    priceMax: null,
    rating: null,
    currency: 'uah',
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
          currency: 'uah',
        },
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
