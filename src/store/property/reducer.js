import { GET_CARDS, SET_FILTERS } from './types';

const initialState = {
  data: [],
  filters: {
    room: null,
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
    case SET_FILTERS:
      return {
        ...state,
        filters: { ...initialState.filters, ...action.payload },
      };
    default:
      return state;
  }
};
