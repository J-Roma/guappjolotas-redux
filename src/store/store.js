import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import { registro } from "../reducers/uiReducer";
import thunk from "redux-thunk";
import { searchReducer } from "../reducers/searchReducer";
import { buyReducers } from "../reducers/buyReducers";
import { dbProductReducers } from "../reducers/dbProductReducers";

const reducers = combineReducers({
  auth: authReducer,
  ui: registro,
  search: searchReducer,
  buy: buyReducers,
  db: dbProductReducers,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
