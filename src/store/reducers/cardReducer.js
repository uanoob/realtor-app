import {
  GET_CARDS,
  GET_SHOW_CARDS,
  SHOW_ROOMS_ALL,
  SHOW_ROOMS_ONE,
  SHOW_ROOMS_TWO,
  SHOW_ROOMS_THREE,
  SHOW_PRICE_MAX,
} from '../actions/types';

const initialState = {
  data: [],
  cards: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, data: action.payload };
    case GET_SHOW_CARDS:
      return { ...state, cards: action.payload };
    case SHOW_ROOMS_ALL:
      return { ...state, cards: action.payload };
    case SHOW_ROOMS_ONE:
      return { ...state, cards: action.payload };
    case SHOW_ROOMS_TWO:
      return { ...state, cards: action.payload };
    case SHOW_ROOMS_THREE:
      return { ...state, cards: action.payload };
    case SHOW_PRICE_MAX:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
}
