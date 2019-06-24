/**
 * This module contains actions related to registration.
 *
 * All actions related to registration can be located here.
 * For example, there is can be located 'confirm by email' actions and so on.
 *
 * @format
 * @flow
 */

import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

export function registerFail() {
  return { type: REGISTER_FAIL };
}

export function registerSuccess(token: string, username: string) {
  return { type: REGISTER_SUCCESS, token, username };
}
