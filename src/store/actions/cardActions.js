import axios from 'axios';
import {
  GET_CARDS, SHOW_CARDS, RESET_FILTERS, IS_FILTERED,
} from './types';

export const getCards = () => async (dispatch) => {
  const response = await axios.get('http://demo4452328.mockable.io/property');
  dispatch({
    type: GET_CARDS,
    payload: response.data.data,
  });
};

export const isFiltered = flag => (dispatch) => {
  dispatch({
    type: IS_FILTERED,
    payload: flag,
  });
};

export const showCards = cards => (dispatch) => {
  dispatch({
    type: SHOW_CARDS,
    payload: cards,
  });
};

export const resetFilters = () => (dispatch) => {
  dispatch({
    type: RESET_FILTERS,
    payload: [],
  });
};
