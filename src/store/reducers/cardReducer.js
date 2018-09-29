import { GET_CARDS, SHOW_CARDS, GET_FILTERS } from '../actions/types';

const initialState = {
  data: [],
  show: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, data: action.payload };
    case SHOW_CARDS:
      return { ...state, show: action.payload };
    case GET_FILTERS:
      return { ...state, show: action.payload };
    default:
      return state;
  }
}
