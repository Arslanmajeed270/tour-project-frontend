
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//importing redux
import pageReducer from './page/reducers';
import authReducer from './auth/reducers';
import errorsReducer from './errors/reducers';
import homePageReducer from './errors/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  page: pageReducer,
  auth : authReducer,
  errors: errorsReducer,
  home: homePageReducer
});

//const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));