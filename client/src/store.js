import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

// const devTools =
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
