/**
 * This module contains a reducer.
 *
 * @format
 * @flow
 */

import {
  CHANGE_COMMENT_INPUT_VISIBILITY,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_PRODUCT_COMMENTS_FAIL,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
  POST_COMMENT_SUCCESS,
  REGISTER_SUCCESS,
  RESTORE_SESSION_SUCCESS,
  SET_COMMENTS_NOT_LOADED
} from "../actionCreators/types";

export default function reducer(
  state: Object = {
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
  },
  action: Object
) {
  //console.log(state);

  switch (action.type) {
    case CHANGE_COMMENT_INPUT_VISIBILITY:
      return {
        ...state,
        uiState: { ...state.uiState, isCommentInputVisible: action.isVisible }
      };

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

    case FETCH_PRODUCT_COMMENTS_FAIL:
      return {
        ...state,
        appState: {
          ...state.appState,
          isCommentsLoadedWithoutErrors: false,
          isCommentsLoadingFinished: true
        }
      };

    case FETCH_PRODUCT_COMMENTS_SUCCESS:
      return {
        ...state,
        appState: {
          ...state.appState,
          isCommentsLoadedWithoutErrors: true,
          isCommentsLoadingFinished: true,
          tempCommentId: -1
        },
        domainData: {
          ...state.domainData,
          comments: {
            ...state.domainData.comments,
            [`product_${action.id}`]: action.comments
          }
        }
      };

    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        appState: {
          ...state.appState,
          isProductsLoadingFinished: true
        }
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        appState: {
          ...state.appState,
          isProductsLoadingFinished: true
        },
        domainData: { ...state.domainData, products: action.products }
      };

    case OPEN_PRODUCT_INFO:
      return {
        ...state,
        appState: {
          ...state.appState,
          selectedProduct: action.id
        }
      };

    case POST_COMMENT_SUCCESS:
      action.newComment.created_by = { username: state.domainData.username };
      action.newComment.id = state.appState.tempCommentId - 1;
      action.newComment.product = state.appState.selectedProduct;

      console.log(action.newComment);

      return {
        ...state,
        appState: {
          ...state.appState,
          tempCommentId: state.appState.tempCommentId - 1
        },
        domainData: {
          ...state.domainData,
          comments: {
            ...state.domainData.comments,
            [`product_${state.appState.selectedProduct}`]: [
              action.newComment,
              ...state.domainData.comments[
                `product_${state.appState.selectedProduct}`
              ]
            ]
          }
        },
        uiState: { ...state.uiState, isCommentInputVisible: false }
      };

    case REGISTER_SUCCESS:
      console.log("token: " + action.token);
      return {
        ...state,
        appState: {
          ...state.appState,
          isLogged: true
        },
        domainData: {
          ...state.domainData,
          token: action.token,
          username: action.username
        }
      };

    case RESTORE_SESSION_SUCCESS:
      console.log("token: " + action.token);
      console.log("username: " + action.username);
      return {
        ...state,
        appState: {
          ...state.appState,
          isLogged: true
        },
        domainData: {
          ...state.domainData,
          token: action.token,
          username: action.username
        }
      };

    case SET_COMMENTS_NOT_LOADED:
      return {
        ...state,
        appState: {
          ...state.appState,
          isCommentsLoadingFinished: false
        }
      };

    default:
      return state;
  }
}
