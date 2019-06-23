/**
 * This module contains middleware that executes all functions related to the logout.
 *
 * @format
 * @flow
 */

import ServerApiService from "../../services/ServerApiService";
import {
  logoutFail,
  logoutSuccess
} from "../../actionCreators/UserAccountActions/logoutActions";
import { removeUserAccountData } from "../SessionStoreMiddleware/accountStoreMiddleware";
import showErrorMessage from "../showErrorMessage";

const LOGOUT_ERROR_MESSAGE = "We can't log out.";
const updateHeaders = ServerApiService.updateHeaders;

export function logout() {
  return (dispatch: Function) => {
    removeUserAccountData(
      "Token",
      () => {
        return removeUserAccountData(
          "Username",
          () => {
            updateHeaders("");
            dispatch(logoutSuccess());
          },
          err => {
            console.log(err);
            showErrorMessage(LOGOUT_ERROR_MESSAGE);
            dispatch(logoutFail());
          }
        );
      },
      err => {
        console.log(err);
        showErrorMessage(LOGOUT_ERROR_MESSAGE);
        dispatch(logoutFail());
      }
    );
  };
}
