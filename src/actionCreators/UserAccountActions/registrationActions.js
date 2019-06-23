/**
 * This module contains actions related to registration.
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
