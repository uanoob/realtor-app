import { GET_USER, CLEAR_USER } from './types';

const initialState = {
  user: {
    email: '',
    displayName: '',
    photoUrl: '',
    providerId: '',
  },
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: { ...action.payload }, isAuth: true };
    case CLEAR_USER:
      return { ...state, user: initialState.user, isAuth: false };
    default:
      return state;
  }
};
