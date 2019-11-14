import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import appReducer from '../reducers';

export const reducers = combineReducers({
  app: appReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(logger));
  return store;
};

export default configureStore;
