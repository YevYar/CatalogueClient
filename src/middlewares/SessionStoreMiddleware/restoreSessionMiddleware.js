/**
 * This module contains middleware that executes all functions
 * related to the restoring access token and username.
 *
 * All functions related to restoring some data
 * between app working sessions can be located here.
 *
 * @format
 * @flow
 */

import RNSecureKeyStore from "react-native-secure-key-store";

import ServerApiService from "../../services/ServerApiService";
import {
  restoreSessionFail,
  restoreSessionSuccess
} from "../../actionCreators/SessionStoreActions/restoreSessionActions";

const updateHeaders = ServerApiService.updateHeaders;

export function restoreSession(...callbacks: Array<Function>) {
  /****************************************************************************
   * RNSecureKeyStore.get(key) gets an account data from an encrypted storage *
   ****************************************************************************/
  return (dispatch: Function) => {
    return RNSecureKeyStore.get("Token").then(
      res => {
        console.log("get token res: ");
        console.log(res);
        const token = res;

        return RNSecureKeyStore.get("Username").then(
          res => {
            console.log("get username res: ");
            console.log(res);
            if (token.length !== 0 && res.length !== 0) {
              console.log("restoreSessionSuccess token: " + token);
              console.log("restoreSessionSuccess username: " + res);
              updateHeaders(token);
              dispatch(restoreSessionSuccess(token, res));
              callbacks.forEach(item => dispatch(item())); // dispatch(callback());
            } else dispatch(restoreSessionFail());
          },
          err => {
            console.log("get username err: ");
            console.log(err);
            dispatch(restoreSessionFail());
            callbacks.forEach(item => dispatch(item())); // dispatch(callback());
          }
        );
      },
      err => {
        console.log("get token err: ");
        console.log(err);
        dispatch(restoreSessionFail());
        callbacks.forEach(item => dispatch(item())); // dispatch(callback());
      }
    );
  };
}
