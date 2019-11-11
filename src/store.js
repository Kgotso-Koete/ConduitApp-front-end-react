import { applyMiddleware, createStore, combineReducers } from "redux";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";
import article from "./reducers/article";
import articleList from "./reducers/articleList";
import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";
import profile from "./reducers/profile";

const reducer = combineReducers({
  article,
  articleList,
  auth,
  common,
  home,
  profile,
  settings
});

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);

const store = createStore(reducer, middleware);

export default store;
