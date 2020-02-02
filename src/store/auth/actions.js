import { GET_USER, CLEAR_USER } from './types';

export const getUser = () => dispatch => {
  const user = localStorage.getItem('firebaseui::rememberedAccounts');
  if (!user) {
    return;
  }
  const parsed = JSON.parse(user)[0];
  dispatch({
    type: GET_USER,
    payload: parsed,
  });
};

export const clearUser = () => dispatch => {
  localStorage.removeItem('firebaseui::rememberedAccounts');
  dispatch({
    type: CLEAR_USER,
    payload: null,
  });
};
