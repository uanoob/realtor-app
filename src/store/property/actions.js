import axios from 'axios';
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

export const getCards = () => async dispatch => {
  const response = await axios.get('https://realtor-app-test.firebaseio.com/data.json');
  dispatch({
    type: GET_CARDS,
    payload: response.data,
  });
};

export const isFiltered = flag => dispatch => {
  dispatch({
    type: IS_FILTERED,
    payload: flag,
  });
};

export const showCards = cards => dispatch => {
  dispatch({
    type: SHOW_CARDS,
    payload: cards,
  });
};

export const resetFilters = () => dispatch => {
  dispatch({
    type: RESET_FILTERS,
  });
};

export const filterByRoom = room => dispatch => {
  dispatch({
    type: FILTER_BY_ROOM,
    payload: room,
  });
};

export const filterByRating = rating => dispatch => {
  dispatch({
    type: FILTER_BY_RATING,
    payload: rating,
  });
};

export const filterByPriceMax = price => dispatch => {
  dispatch({
    type: FILTER_BY_PRICE_MAX,
    payload: price,
  });
};

export const filterByPriceMin = price => dispatch => {
  dispatch({
    type: FILTER_BY_PRICE_MIN,
    payload: price,
  });
};

export const setFilter = (name, value) => dispatch => {
  dispatch({
    type: SET_FILTER,
    payload: { name, value },
  });
};
