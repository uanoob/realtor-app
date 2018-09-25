import { GET_CARDS } from './types';
import axios from 'axios';

export const getCards = () => async dispatch => {
  const response = await axios.get('http://demo4452328.mockable.io/property');
  dispatch({
    type: GET_CARDS,
    payload: response.data.data,
  });
};
