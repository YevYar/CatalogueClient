/**
 * This module contains actions related to restoring last session.
 *
 * All actions related to restoring some data
 * between app working sessions can be located here.
 *
 * @format
 * @flow
 */

import { RESTORE_SESSION_FAIL, RESTORE_SESSION_SUCCESS } from "../types";

export function restoreSessionFail() {
  return { type: RESTORE_SESSION_FAIL };
}

export function restoreSessionSuccess(token: string, username: string) {
  return { type: RESTORE_SESSION_SUCCESS, token, username };
}
