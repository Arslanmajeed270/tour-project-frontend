
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//importing redux
import pageReducer from './pageReducer';
import authReducer from './authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  page: pageReducer,
  auth : authReducer,
});

//const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));