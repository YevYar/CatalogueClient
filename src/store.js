/**
 * This is a Redux store of the app.
 *
 * @format
 * @flow
 */

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
