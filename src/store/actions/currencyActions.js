import axios from 'axios';
import {
  GET_CURRENCY_USD,
  GET_CURRENCY_EUR,
  CHANGE_CURRENCY,
  SET_CURRENCY_SIGN,
  CLEAR_CURRENCY_SIGN,
} from './types';

export const getCurrencyUSD = () => async dispatch => {
  let response = await axios.get(
    'https://free.currencyconverterapi.com/api/v6/convert?q=USD_UAH&compact=ultra',
  );
  dispatch({
    type: GET_CURRENCY_USD,
    payload: response.data,
  });
};

export const getCurrencyEUR = () => async dispatch => {
  let response = await axios.get(
    'https://free.currencyconverterapi.com/api/v6/convert?q=EUR_UAH&compact=ultra',
  );
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
