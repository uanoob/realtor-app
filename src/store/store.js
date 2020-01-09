import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const devtoolsString = '__REDUX_DEVTOOLS_EXTENSION__';

const enhancer = compose(
  applyMiddleware(thunk),
  window[devtoolsString] && window[devtoolsString](),
);

const store = createStore(rootReducer, enhancer);

export default store;
