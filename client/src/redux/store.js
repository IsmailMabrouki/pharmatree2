// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';  // Fix: Import as 'thunk' instead of 'Middleware'
import Reducers from './reducers';

const initialState = {};

const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
