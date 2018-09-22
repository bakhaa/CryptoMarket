import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../store/reducers';
import { API } from '../middleware';

export default () => {
  const middleware = [thunk, API];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return store;
};
