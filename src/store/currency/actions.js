import axios from 'axios';
import { Cookies } from 'react-cookie';

import { GET_CURRENCY_USD, GET_CURRENCY_EUR } from './types';

import { CURRENCY_CONVERTER_API_URI as uri, CURRENCY_CONVERTER_API_KEY as key } from '../../config';

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
    response = await axios.get(`${uri}/convert?q=USD_UAH&compact=ultra&apiKey=${key}`);
    setCookies('usd_uan', response);
  }
  dispatch({
    type: GET_CURRENCY_USD,
    payload: response.data.USD_UAH,
  });
};

export const getCurrencyEUR = () => async dispatch => {
  let response = getCookies('eur_uan');
  if (!response) {
    response = await axios.get(`${uri}/convert?q=EUR_UAH&compact=ultra&apiKey=${key}`);
    setCookies('eur_uan', response);
  }
  dispatch({
    type: GET_CURRENCY_EUR,
    payload: response.data.EUR_UAH,
  });
};
