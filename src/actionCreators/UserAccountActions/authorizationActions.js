/**
 * This module contains actions related to login.
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
