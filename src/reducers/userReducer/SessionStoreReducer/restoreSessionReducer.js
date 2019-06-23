/**
 * This module contains the reducer that updates the store
 * in the result of the restore session actions.
 *
 * @format
 * @flow
 */

import { RESTORE_SESSION_SUCCESS } from "../../../actionCreators/types";

function restoreSessionReducer(
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
  console.log("====================== STATE in RESTORE_SESSION_REDUCER");
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case RESTORE_SESSION_SUCCESS:
      console.log("token: " + action.token);
      console.log("username: " + action.username);
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

function restoreSessionSuccess(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE in RESTORE_SESSION_REDUCER");
  console.log(action.type);
  console.log(state);
  console.log("token: " + action.token);
  console.log("username: " + action.username);
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

export default { RESTORE_SESSION_SUCCESS: restoreSessionSuccess };
