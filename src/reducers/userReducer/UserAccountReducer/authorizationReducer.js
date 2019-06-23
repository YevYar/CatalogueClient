/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to login.
 *
 * @format
 * @flow
 */

import { LOGIN_SUCCESS } from "../../../actionCreators/types";

function authorizationReducer(
  state: Object = {} /*{
    appState: {
      isCommentsLoadedWithoutErrors: false,
      isCommentsLoadingFinished: false,
      isLogged: false,
      isProductsLoadingFinished: false,
      selectedProduct: -1,
      tempCommentId: -1
    },
    domainData: {
      comments: {},
      products: [],
      token: "",
      username: ""
    },
    uiState: {
      isCommentInputVisible: false
    }
  }*/,
  action: Object
) {
  console.log("====================== STATE im AUTHORIZATION_REDUCER");
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("token: " + action.token);
      return {
        ...state,
        appState: { ...state.appState, isLogged: true },
        domainData: {
          ...state.domainData,
          token: action.token,
          username: action.username
        }
      };

    default:
      return state;
  }
}

function loginSuccess(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE im AUTHORIZATION_REDUCER");
  console.log(action.type);
  console.log(state);
  console.log("token: " + action.token);
  return {
    ...state,
    appState: { ...state.appState, isLogged: true },
    domainData: {
      ...state.domainData,
      token: action.token,
      username: action.username
    }
  };
}

export default { LOGIN_SUCCESS: loginSuccess };
