/**
 * This module contains middleware that executes all functions related to the registration.
 *
 * @format
 * @flow
 */

import {
  registerFail,
  registerSuccess
} from "../../actionCreators/UserAccountActions/registrationActions";
import NavigationService from "../../services/NavigationService";
import { saveUserAccountData } from "../SessionStoreMiddleware/accountStoreMiddleware";
import showErrorMessage from "../showErrorMessage";
import ServerApiService from "../../services/ServerApiService";

const USERNAME_EXISTED_MESSAGE = "User with this username has already existed.";
const REGISTER_FAIL_MESSAGE =
  "Something has gone wrong. We can't register you.";
const apiClient = ServerApiService.getApiService();
const updateHeaders = ServerApiService.updateHeaders;

export function register(username: string, password: string) {
  return (dispatch: Function) => {
    return apiClient
      .post("register/", { username: username, password: password })
      .then(response => {
        console.log("register");
        if (response.data.success === true) {
          //NavigationService.navigate("Home");
          NavigationService.goBack();
          NavigationService.goBack();

          const token = response.data.token;

          saveUserAccountData(token, username);
          updateHeaders(token);
          dispatch(registerSuccess(token, username));
        } else {
          showErrorMessage(USERNAME_EXISTED_MESSAGE);
          dispatch(registerFail());
        }
      })
      .catch(error => {
        console.log("register: " + error);
        showErrorMessage(REGISTER_FAIL_MESSAGE);
        dispatch(registerFail());
        //throw error;
      });
  };
}
