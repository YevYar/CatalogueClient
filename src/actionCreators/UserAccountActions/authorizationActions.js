/**
 * This module contains actions related to login.
 *
 * All actions related to login can be located here.
 * For example, there is can be located 'restore password' actions.
 *
 * @format
 * @flow
 */

import { LOGIN_FAIL, LOGIN_SUCCESS } from "../types";

export function loginFail() {
  return { type: LOGIN_FAIL };
}

export function loginSuccess(token: string, username: string) {
  return { type: LOGIN_SUCCESS, token, username };
}
