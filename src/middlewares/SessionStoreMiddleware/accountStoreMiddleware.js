/**
 * This module contains middleware that executes all functions
 * related to the storing some user (account) data.
 *
 * All functions related to storing or removing
 * some data in local storage can be located here.
 *
 * @format
 * @flow
 */

import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

import showErrorMessage from "../showErrorMessage";

const SAVE_ACCOUNT_DATA_ERROR_MESSAGE =
  "We can't save account data for session recovery.";

export function removeUserAccountData(
  key: string,
  onSuccess: Function,
  onFail: Function
) {
  RNSecureKeyStore.remove(key).then(() => onSuccess(), err => onFail(err));
}

export function saveUserAccountData(token: String, username: string) {
  /******************************************************************************************************
   * RNSecureKeyStore.set(key, value) saves an account data for session restore in an encrypted storage *
   ******************************************************************************************************/
  RNSecureKeyStore.set("Token", token, {
    accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
  }).then(
    res => {
      console.log(res);
      RNSecureKeyStore.set("Username", username, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
      }).then(
        res => console.log(res),
        err => {
          console.log(err);
          showErrorMessage(SAVE_ACCOUNT_DATA_ERROR_MESSAGE);
        }
      );
    },
    err => {
      console.log(err);
      showErrorMessage(SAVE_ACCOUNT_DATA_ERROR_MESSAGE);
    }
  );
}
