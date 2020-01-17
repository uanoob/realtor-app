import axios from 'axios';
import { GET_CARDS, RESET_FILTERS, SET_FILTER } from './types';

export const getCards = () => async dispatch => {
  const response = await axios.get('https://realtor-app-test.firebaseio.com/data.json');
  dispatch({
    type: GET_CARDS,
    payload: response.data,
  });
};

export const resetFilters = () => dispatch => {
  dispatch({
    type: RESET_FILTERS,
  });
};

export const setFilter = (name, value) => dispatch => {
  dispatch({
    type: SET_FILTER,
    payload: { name, value },
  });
};
