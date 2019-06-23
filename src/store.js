/**
 * This is a Redux store of the app.
 *
 * @format
 * @flow
 */

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
