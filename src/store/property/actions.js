import axios from 'axios';
import { GET_CARDS, SET_FILTERS } from './types';

export const getCards = () => async dispatch => {
  const response = await axios.get('https://realtor-app-test.firebaseio.com/data.json');
  dispatch({
    type: GET_CARDS,
    payload: response.data,
  });
};

export const setFilters = parsed => dispatch => {
  dispatch({
    type: SET_FILTERS,
    payload: parsed,
  });
};
