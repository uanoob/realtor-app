import axios from 'axios';
import { Cookies } from 'react-cookie';

import {
  GET_CURRENCY_USD,
  GET_CURRENCY_EUR,
  CHANGE_CURRENCY,
  SET_CURRENCY_SIGN,
  CLEAR_CURRENCY_SIGN,
} from './types';
import API_URI from '../../config/config';
import API_KEY from '../../config/key';

const getCookies = name => {
  const cookies = new Cookies();
  return cookies.get(name);
};

const setCookies = (name, response) => {
  const cookies = new Cookies();
  const inOneDay = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
  cookies.set(name, { data: response.data }, { path: '/', expires: inOneDay });
};

export const getCurrencyUSD = () => async dispatch => {
  let response = getCookies('usd_uan');
  if (!response) {
    response = await axios.get(`${API_URI}/convert?q=USD_UAH&compact=ultra&apiKey=${API_KEY}`);
    setCookies('usd_uan', response);
  }
  dispatch({
    type: GET_CURRENCY_USD,
    payload: response.data,
  });
};

export const getCurrencyEUR = () => async dispatch => {
  let response = getCookies('eur_uan');
  if (!response) {
    response = await axios.get(`${API_URI}/convert?q=EUR_UAH&compact=ultra&apiKey=${API_KEY}`);
    setCookies('eur_uan', response);
  }
  dispatch({
    type: GET_CURRENCY_EUR,
    payload: response.data,
  });
};

export const changeCurrency = cards => dispatch => {
  dispatch({
    type: CHANGE_CURRENCY,
    payload: cards,
  });
};

export const setCurrencySign = sign => dispatch => {
  dispatch({
    type: SET_CURRENCY_SIGN,
    payload: sign,
  });
};

export const clearCurrencySign = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENCY_SIGN,
    payload: '',
  });
};
