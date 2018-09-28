import {
  GET_CARDS,
  GET_SHOW_CARDS,
  SHOW_ROOMS_ALL,
  SHOW_ROOMS_ONE,
  SHOW_ROOMS_TWO,
  SHOW_ROOMS_THREE,
  SHOW_PRICE_MAX,
} from './types';
import axios from 'axios';

export const getCards = () => async dispatch => {
  const response = await axios.get('http://demo4452328.mockable.io/property');
  dispatch({
    type: GET_CARDS,
    payload: response.data.data,
  });
  dispatch({
    type: GET_SHOW_CARDS,
    payload: response.data.data,
  });
};

export const getShowRooms = (cards, filter) => {
  switch (filter) {
    case 'SHOW_ROOMS_ALL':
      return showAll(cards);
    case 'SHOW_ROOMS_ONE':
      return showOne(cards);
    case 'SHOW_ROOMS_TWO':
      return showTwo(cards);
    case 'SHOW_ROOMS_THREE':
      return showThree(cards);
    default:
      return cards;
  }
};

const showAll = cards => dispatch => {
  dispatch({
    type: SHOW_ROOMS_ALL,
    payload: cards,
  });
};

const showOne = cards => dispatch => {
  const filtered = cards.filter(card => card.total_rooms === 1);
  dispatch({
    type: SHOW_ROOMS_ONE,
    payload: filtered,
  });
};

const showTwo = cards => dispatch => {
  const filtered = cards.filter(card => card.total_rooms === 2);
  dispatch({
    type: SHOW_ROOMS_TWO,
    payload: filtered,
  });
};

const showThree = cards => dispatch => {
  const filtered = cards.filter(card => card.total_rooms === 3);
  dispatch({
    type: SHOW_ROOMS_THREE,
    payload: filtered,
  });
};


export const showPriceMax = (cards, value) => dispatch => {
  const filtered = cards.filter(card => card.price <= value);
  dispatch({
    type: SHOW_PRICE_MAX,
    payload: filtered,
  });
};
