// import axios from 'axios';
import { GET_CURRENCY_USD, GET_CURRENCY_EUR, CHANGE_CURRENCY } from './types';

export const getCurrencyUSD = () => async dispatch => {
  // const response = await axios.get(
  //   'https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=ultra',
  // );
  const response = { USD_UAH: 28.271038 };
  dispatch({
    type: GET_CURRENCY_USD,
    payload: response,
  });
};

export const getCurrencyEUR = () => async dispatch => {
  // const response = await axios.get(
  //   'https://free.currencyconverterapi.com/api/v6/convert?q=EUR_UAH&compact=ultra',
  // );
  const response = {EUR_UAH: 32.855153};
  dispatch({
    type: GET_CURRENCY_EUR,
    payload: response,
  });
};

export const changeCurrency = cards => dispatch => {
  dispatch({
    type: CHANGE_CURRENCY,
    payload: cards,
  });
};
