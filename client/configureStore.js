/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import history from 'utils/history';

export default function configureStore(initialState = {}, injectedReducers = {}) {
  // Grab the state from a global variable injected into
  // the server-generated HTML
  if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
    initialState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
  }

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducer(injectedReducers),
    initialState,
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  return store;
}
