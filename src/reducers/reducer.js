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
    comments: {},
    isCommentInputVisible: false,
    isCommentsLoadedWithoutErrors: false,
    isCommentsLoadingFinished: false,
    isLogged: false,
    isProductsLoadingFinished: false,
    products: [],
    selectedProduct: -1,
    tempCommentId: -1,
    token: "",
    username: ""

    /*appState: {
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
    }*/
  },
  action: Object
) {
  //console.log(state);
  let comments;
  let data;
  let newComment;
  let pComments;

  switch (action.type) {
    case CHANGE_COMMENT_INPUT_VISIBILITY:
      return {
        ...state,
        isCommentInputVisible: action.isVisible
      };

    case LOGIN_SUCCESS:
      console.log("token: " + action.token);
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: action.username
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        token: "",
        username: ""
      };

    case FETCH_PRODUCT_COMMENTS_FAIL:
      return {
        ...state,
        isCommentsLoadedWithoutErrors: false,
        isCommentsLoadingFinished: true
      };

    case FETCH_PRODUCT_COMMENTS_SUCCESS:
      data = action.comments;
      comments = state.comments;
      comments[`product_${action.id}`] = data;
      return {
        ...state,
        isCommentsLoadedWithoutErrors: true,
        isCommentsLoadingFinished: true,
        tempCommentId: -1,
        comments: comments
      };

    case FETCH_PRODUCTS_FAIL:
      return { ...state, isProductsLoadingFinished: true };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProductsLoadingFinished: true,
        products: action.products
      };

    case OPEN_PRODUCT_INFO:
      return { ...state, selectedProduct: action.id };

    case POST_COMMENT_SUCCESS:
      newComment = action.newComment;
      newComment.created_by.username = state.username;
      newComment.id = state.tempCommentId--;
      newComment.product = state.selectedProduct;
      console.log(newComment);

      comments = state.comments;
      pComments = comments[`product_${state.selectedProduct}`];
      pComments = [newComment, ...pComments];
      comments[`product_${state.selectedProduct}`] = pComments;

      console.log({ ...state, comments: comments });
      return { ...state, comments: comments, isCommentInputVisible: false };

    case REGISTER_SUCCESS:
      console.log("token: " + action.token);
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: action.username
      };

    case RESTORE_SESSION_SUCCESS:
      console.log("token: " + action.token);
      console.log("username: " + action.username);
      return {
        ...state,
        isLogged: true,
        token: action.token,
        username: action.username
      };

    case SET_COMMENTS_NOT_LOADED:
      return { ...state, isCommentsLoadingFinished: false };

    default:
      return state;
  }
}
