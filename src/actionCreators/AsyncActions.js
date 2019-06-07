/**
 * This module contains all async actions which application can execute.
 *
 * @format
 * @flow
 */

import axios from "axios";

import {
  loginFail,
  loginSuccess,
  fetchProductCommentsFail,
  fetchProductCommentsSuccess,
  fetchProductsFail,
  fetchProductsSuccess,
  postCommentFail,
  postCommentSuccess,
  registerFail,
  registerSuccess
} from "./SyncActions";

const apiUrl = "http://smktesting.herokuapp.com/api";

export function login() {}

export function fetchProductComments(id) {
  return dispatch => {
    return axios
      .get(`${apiUrl}/reviews/${id}`)
      .then(response => {
        console.log("fetchProductComments");
        dispatch(fetchProductCommentsSuccess(id, response.data));
      })
      .catch(error => {
        console.log("fetchProductComments" + error);
        fetchProductCommentsFail();
        throw error;
      });
  };
}

export function fetchProducts() {
  return dispatch => {
    return axios
      .get(`${apiUrl}/products/`)
      .then(response => {
        console.log("fetchProducts");
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        console.log("fetchProducts: " + error);
        fetchProductsFail();
        throw error;
      });
  };
}

export function postComment() {}

export function register() {}
