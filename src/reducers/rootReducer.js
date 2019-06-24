/**
 * This module contains the root reducer.
 *
 * @format
 * @flow
 */

import { POST_COMMENT_SUCCESS } from "../actionCreators/types";
import catalogueReducer from "./catalogueReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer/userReducer";

function createNewState(state: Object, action: Object) {
  return {
    catalogueState: catalogueReducer(state.catalogueState, action),
    commentsState: commentReducer(state.commentsState, action),
    userState: userReducer(state.userState, action)
  };
}

export default function rootReducer(
  state: Object = {
    catalogueState: {
      appState: { isProductsLoadingFinished: false, selectedProduct: -1 },
      domainData: { products: [] }
    },
    commentsState: {
      appState: {
        isCommentsLoadedWithoutErrors: false,
        isCommentsLoadingFinished: false,
        tempCommentId: -1
      },
      domainData: { comments: {} },
      uiState: { isCommentInputVisible: false }
    },
    userState: {
      appState: { isLogged: false },
      domainData: { token: "", username: "" }
    }
  },
  action: Object
) {
  console.log("\n\n");
  console.log("====================== STATE ROOT_REDUCER");
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case POST_COMMENT_SUCCESS:
      action.newComment.created_by = {
        username: state.userState.domainData.username
      };
      action.newComment.id = state.commentsState.appState.tempCommentId - 1; // don't use decrement operator, because it can mutate store
      action.newComment.product = state.catalogueState.appState.selectedProduct;
      action.selectedProduct = state.catalogueState.appState.selectedProduct;
      return createNewState(state, action);

    default:
      return createNewState(state, action);
  }
}
