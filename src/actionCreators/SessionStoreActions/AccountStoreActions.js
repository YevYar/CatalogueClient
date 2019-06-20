/**
 * This module contains actions related to storing account data on client side.
 *
 * @format
 * @flow
 */

import { LOGOUT_FAIL, LOGOUT_SUCCESS } from "../types";

export function logoutFail() {
  return { type: LOGOUT_FAIL };
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}
