/**
 * This module contains all sync actions which can be called by async actions.
 *
 * @format
 * @flow
 */

import { Alert } from "react-native";

import {
  CHANGE_COMMENT_INPUT_VISIBILITY,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  FETCH_PRODUCT_COMMENTS_FAIL,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
  POST_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "./types";
import NavigationService from "../NavigationService";

export function changeCommentInputVisibility(isVisible) {
  return { type: CHANGE_COMMENT_INPUT_VISIBILITY, isVisible };
}

export function loginFail() {
  Alert.alert("Something has gone wrong. We can't login.");
  return { type: LOGIN_FAIL };
}

export function loginSuccess(answer, username) {
  console.log(answer);
  if (answer.success === true) {
    //NavigationService.navigate("Home");
    NavigationService.goBack();

    const token = answer.token;
    return {
      type: LOGIN_SUCCESS,
      token,
      username
    };
  } else {
    Alert.alert("Invalid entered data.");
    return { type: LOGIN_FAIL };
  }
}

export function fetchProductCommentsFail() {
  Alert.alert(
    "Something has gone wrong. We can't get a list of product comments."
  );
  return { type: FETCH_PRODUCT_COMMENTS_FAIL };
}

export function fetchProductCommentsSuccess(id, comments) {
  return {
    type: FETCH_PRODUCT_COMMENTS_SUCCESS,
    id: id,
    comments
  };
}

export function fetchProductsFail() {
  Alert.alert("Something has gone wrong. We can't get the product list.");
  return { type: FETCH_PRODUCTS_FAIL };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  };
}

export function openProductInfo(id) {
  return {
    type: OPEN_PRODUCT_INFO,
    id
  };
}

export function postCommentFail() {
  Alert.alert("Something has gone wrong. We can't post your comment.");
  return { type: POST_COMMENT_FAIL };
}

export function postCommentSuccess(answer, comment, rating /*answer*/) {
  //let date = new Date();
  if (answer.success === true) {
    let newComment = {
      created_at: new Date().toString(),
      created_by: {},
      rate: rating,
      text: comment
    };
    return { type: POST_COMMENT_SUCCESS, newComment };
  } else return postCommentFail();
}

export function registerFail() {
  Alert.alert("Something has gone wrong. We can't register you.");
  return { type: REGISTER_FAIL };
}

export function registerSuccess(answer, username) {
  if (answer.success === true) {
    //NavigationService.navigate("Home");
    NavigationService.goBack();
    NavigationService.goBack();

    const token = answer.token;
    return {
      type: REGISTER_SUCCESS,
      token,
      username
    };
  } else {
    Alert.alert("User with this username has already existed.");
    return { type: REGISTER_FAIL };
  }
}
