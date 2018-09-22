import React from 'react';
import { Provider } from 'react-redux';

import registerScreens from './config/routes';
import configureStore from './config/store';

const store = configureStore();
const App = registerScreens(store, Provider);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
