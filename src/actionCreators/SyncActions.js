/**
 * This module contains all sync actions which can be called by async actions.
 *
 * @format
 * @flow
 */

import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
import { Alert } from "react-native";

import {
  CHANGE_COMMENT_INPUT_VISIBILITY,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_PRODUCT_COMMENTS_FAIL,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
  POST_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESTORE_SESSION_FAIL,
  RESTORE_SESSION_SUCCESS
} from "./types";
import NavigationService from "../NavigationService";

export function changeCommentInputVisibility(isVisible: boolean) {
  return { type: CHANGE_COMMENT_INPUT_VISIBILITY, isVisible };
}

export function fetchProductCommentsFail() {
  Alert.alert(
    "Something has gone wrong. We can't get a list of product comments."
  );
  return { type: FETCH_PRODUCT_COMMENTS_FAIL };
}

export function fetchProductCommentsSuccess(
  id: number,
  comments: Array<Object>
) {
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

export function fetchProductsSuccess(products: Array<Object>) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  };
}

export function loginFail() {
  Alert.alert("Something has gone wrong. We can't login.");
  return { type: LOGIN_FAIL };
}

export function loginSuccess(answer: Object, username: string) {
  console.log(answer);
  if (answer.success === true) {
    //NavigationService.navigate("Home");
    NavigationService.goBack();

    const token = answer.token;

    /******************************************************************************************************
     * RNSecureKeyStore.set(key, value) saves an account data for session restore in an encrypted storage *
     ******************************************************************************************************/
    RNSecureKeyStore.set("Token", token, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
    }).then(res => console.log(res), err => console.log(err));

    RNSecureKeyStore.set("Username", username, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
    }).then(res => console.log(res), err => console.log(err));

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

export function logout() {
  /**********************************************************************************
   * RNSecureKeyStore.remove(key) removes an account data from an encrypted storage *
   **********************************************************************************/
  RNSecureKeyStore.remove("Token").then(
    res => console.log(res),
    err => console.log(err)
  );
  RNSecureKeyStore.remove("Username").then(
    res => console.log(res),
    err => console.log(err)
  );
  return { type: LOGOUT };
}

export function openProductInfo(id: number) {
  return {
    type: OPEN_PRODUCT_INFO,
    id
  };
}

export function postCommentFail() {
  Alert.alert("Something has gone wrong. We can't post your comment.");
  return { type: POST_COMMENT_FAIL };
}

export function postCommentSuccess(
  answer: Object,
  comment: string,
  rating: number
) {
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

export function registerSuccess(answer: Object, username: string) {
  if (answer.success === true) {
    //NavigationService.navigate("Home");
    NavigationService.goBack();
    NavigationService.goBack();

    const token = answer.token;

    /******************************************************************************************************
     * RNSecureKeyStore.set(key, value) saves an account data for session restore in an encrypted storage *
     ******************************************************************************************************/
    RNSecureKeyStore.set("Token", token, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
    }).then(res => console.log(res), err => console.log(err));

    RNSecureKeyStore.set("Username", username, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
    }).then(res => console.log(res), err => console.log(err));

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

export function restoreSessionFail() {
  return { type: RESTORE_SESSION_FAIL };
}

export function restoreSessionSuccess(token: string, username: string) {
  if (token.length !== 0 && username.length !== 0) {
    console.log("restoreSessionSuccess token: " + token);
    console.log("restoreSessionSuccess username: " + username);
    return { type: RESTORE_SESSION_SUCCESS, token, username };
  } else return restoreSessionFail();
}
