import 'core-js/fn/array/from';
import 'core-js/fn/array/find-index';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { loadPictures } from './containers/App/actions'
import rootReducer from './reducers';
import App from './containers/App';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(loadPictures());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
