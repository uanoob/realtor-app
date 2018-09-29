import { GET_CARDS, SHOW_CARDS, GET_FILTERS } from './types';
import axios from 'axios';

export const getCards = () => async dispatch => {
  const response = await axios.get('http://demo4452328.mockable.io/property');
  dispatch({
    type: GET_CARDS,
    payload: response.data.data,
  });
  dispatch({
    type: SHOW_CARDS,
    payload: response.data.data,
  });
};

export const getFilters = cards => dispatch => {
  dispatch({
    type: GET_FILTERS,
    payload: cards,
  });
};
