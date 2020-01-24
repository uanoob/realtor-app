import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const devtoolsString = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

const composeEnhancers = window[devtoolsString] || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
