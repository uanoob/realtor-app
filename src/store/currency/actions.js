import axios from 'axios';
import {
  GET_CURRENCY_USD,
  GET_CURRENCY_EUR,
  CHANGE_CURRENCY,
  SET_CURRENCY_SIGN,
  CLEAR_CURRENCY_SIGN,
} from './types';
import API_URI from '../../config/config';
import API_KEY from '../../config/key';

export const getCurrencyUSD = () => async dispatch => {
  const response = await axios.get(`${API_URI}/convert?q=USD_UAH&compact=ultra&apiKey=${API_KEY}`);
  dispatch({
    type: GET_CURRENCY_USD,
    payload: response.data,
  });
};

export const getCurrencyEUR = () => async dispatch => {
  const response = await axios.get(`${API_URI}/convert?q=EUR_UAH&compact=ultra&apiKey=${API_KEY}`);
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
