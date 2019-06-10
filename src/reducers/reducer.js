/**
 * This module contains a reducer.
 *
 * @format
 * @flow
 */

import {
  CHANGE_COMMENT_INPUT_VISIBILITY,
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
  POST_COMMENT_SUCCESS,
  REGISTER_SUCCESS,
  RESTORE_SESSION_SUCCESS
} from "../actionCreators/types";

const imgUrl = "http://smktesting.herokuapp.com/static/";

export default function reducer(
  state: Object = {
    comments: {},
    isCommentInputVisible: false,
    isLogged: false,
    products: [],
    selectedProduct: -1,
    tempCommentId: -1,
    token: "",
    username: ""
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

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        token: "",
        username: ""
      };

    case FETCH_PRODUCT_COMMENTS_SUCCESS:
      data = action.comments;
      data = data.sort((a, b) => {
        let aD = new Date(a.created_at),
          bD = new Date(b.created_at);
        return aD > bD ? -1 : bD > aD ? 1 : 0;
      });
      comments = state.comments;
      comments[`product_${action.id}`] = data;
      return { ...state, tempCommentId: -1, comments: comments };

    case FETCH_PRODUCTS_SUCCESS:
      data = action.products;
      data.forEach(element => {
        element.img = imgUrl + element.img;
      });
      return { ...state, products: data };

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

    default:
      return state;
  }
}
