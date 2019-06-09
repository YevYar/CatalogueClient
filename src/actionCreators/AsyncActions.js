/**
 * This module contains all async actions which application can execute.
 *
 * @format
 * @flow
 */

import axios from "axios";
import RNSecureKeyStore from "react-native-secure-key-store";

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
  registerSuccess,
  restoreSessionFail,
  restoreSessionSuccess
} from "./SyncActions";

import store from "../store";

const apiUrl = "http://smktesting.herokuapp.com/api";
let headers = {
  headers: {
    Authorization: ""
  }
};

function updateHeaders() {
  const state = store.getState();
  const token = state.token;

  if (token === "") {
    headers.headers.Authorization = "";
  } else headers.headers.Authorization = `Token ${token}`;
}

export function login(username, password) {
  return dispatch => {
    return axios
      .post(`${apiUrl}/login/`, { username: username, password: password })
      .then(response => {
        console.log("login");
        dispatch(loginSuccess(response.data, username));
      })
      .catch(error => {
        console.log("login: " + error);
        loginFail();
        //throw error;
      });
  };
}

export function fetchProductComments(id) {
  updateHeaders();
  return dispatch => {
    return axios
      .get(`${apiUrl}/reviews/${id}`, headers)
      .then(response => {
        console.log("fetchProductComments");
        dispatch(fetchProductCommentsSuccess(id, response.data));
      })
      .catch(error => {
        console.log("fetchProductComments: " + error);
        fetchProductCommentsFail();
        //throw error;
      });
  };
}

export function fetchProducts() {
  updateHeaders();
  return dispatch => {
    return axios
      .get(`${apiUrl}/products/`, headers)
      .then(response => {
        console.log("fetchProducts");
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        console.log("fetchProducts: " + error);
        fetchProductsFail();
        //throw error;
      });
  };
}

export function postComment(comment, productId, rating) {
  // const state = store.getState();
  // const token = state.token;
  // setToken(token);
  //headers.Authorization = token;
  /*let header = {
    headers: {
      Authorization: `Token ${token}`
    }
  };
  headers.headers.Authorization = token;*/
  updateHeaders();
  return dispatch => {
    return axios
      .post(
        `${apiUrl}/reviews/${productId}`,
        { rate: rating, text: comment },
        headers
      )
      .then(response => {
        console.log("postComment");
        dispatch(postCommentSuccess(response.data, comment, rating));
      })
      .catch(error => {
        console.log("postComment: " + error);
        postCommentFail();
        //throw error;
      });
  };
}

export function register(username, password) {
  return dispatch => {
    return axios
      .post(`${apiUrl}/register/`, { username: username, password: password })
      .then(response => {
        console.log("register");
        dispatch(registerSuccess(response.data, username));
      })
      .catch(error => {
        console.log("register: " + error);
        registerFail();
        //throw error;
      });
  };
}

export function restoreSession() {
  return dispatch => {
    return RNSecureKeyStore.get("Token").then(
      res => {
        console.log("get token res: ");
        console.log(res);
        const token = res;

        return RNSecureKeyStore.get("Username").then(
          res => {
            console.log("get username res: ");
            console.log(res);
            dispatch(restoreSessionSuccess(token, res));
          },
          err => {
            console.log("get username err: ");
            console.log(err);
            restoreSessionFail();
          }
        );
      },
      err => {
        console.log("get token err: ");
        console.log(err);
        restoreSessionFail();
      }
    );
  };
}
