import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const isDevEnv = process.env.NODE_ENV === `development`;

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, isDevEnv && logger),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
