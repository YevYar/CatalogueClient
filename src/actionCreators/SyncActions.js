/**
 * This module contains all sync actions which can be called by async actions.
 *
 * @format
 * @flow
 */

import { Alert } from "react-native";

import {
  LOGIN,
  FETCH_PRODUCT_COMMENTS,
  FETCH_PRODUCTS,
  POST_COMMENT,
  REGISTER
} from "./types";

/*import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  FETCH_PRODUCT_COMMENTS_FAIL,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  POST_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "./types";*/

export function loginFail() {}

export function loginSuccess() {}

export function fetchProductCommentsFail() {}

export function fetchProductCommentsSuccess() {}

export function fetchProductsFail() {
  Alert.alert(
    "Something has gone wrong. We can't get the product list from the server."
  );
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS,
    products
  };
}

export function postCommentFail() {}

export function postCommentSuccess() {}

export function registerFail() {}

export function registerSuccess() {}
