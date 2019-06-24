/**
 * This module contains middleware that executes all functions related to the authorization.
 *
 * All functions related to login can be located here.
 * For example, there is can be located 'restore password' function.
 *
 * @format
 * @flow
 */

import {
  loginFail,
  loginSuccess
} from "../../actionCreators/UserAccountActions/authorizationActions";
import NavigationService from "../../services/NavigationService";
import { saveUserAccountData } from "../SessionStoreMiddleware/accountStoreMiddleware";
import showErrorMessage from "../showErrorMessage";
import ServerApiService from "../../services/ServerApiService";

const INVALID_DATA_MESSAGE = "Invalid entered data.";
const LOGIN_FAIL_MESSAGE = "Something has gone wrong. We can't login.";
const apiClient = ServerApiService.getApiService();
const updateHeaders = ServerApiService.updateHeaders;

export function login(username: string, password: string) {
  return (dispatch: Function) => {
    return apiClient
      .post("login/", { username: username, password: password })
      .then(response => {
        if (response.data.success === true) {
          //NavigationService.navigate("Home");
          NavigationService.goBack();

          const token = response.data.token;

          saveUserAccountData(token, username);
          updateHeaders(token);
          dispatch(loginSuccess(token, username));
        } else {
          showErrorMessage(INVALID_DATA_MESSAGE);
          dispatch(loginFail());
        }
      })
      .catch(error => {
        console.log("login: " + error);
        showErrorMessage(LOGIN_FAIL_MESSAGE);
        dispatch(loginFail());
        //throw error;
      });
  };
}
