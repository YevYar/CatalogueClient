/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to logout.
 *
 * @format
 * @flow
 */

import { LOGOUT_SUCCESS } from "../../../actionCreators/types";

function accountStoreReducer(
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
  console.log("====================== STATE in ACCOUNT_STORE_REDUCER");
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        appState: { ...state.appState, isLogged: false },
        domainData: {
          ...state.domainData,
          token: "",
          username: ""
        }
      };

    default:
      return state;
  }
}

function logoutSuccess(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE in LOGOUT_REDUCER");
  console.log(action.type);
  console.log(state);
  return {
    ...state,
    appState: { ...state.appState, isLogged: false },
    domainData: {
      ...state.domainData,
      token: "",
      username: ""
    }
  };
}

export default { LOGOUT_SUCCESS: logoutSuccess };
