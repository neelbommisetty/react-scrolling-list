import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

export default function configureStore() {
  /* eslint-disable */

  const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  /* eslint-enable */

  return createStore(rootReducer, reduxDevTools, applyMiddleware(thunk));
}
