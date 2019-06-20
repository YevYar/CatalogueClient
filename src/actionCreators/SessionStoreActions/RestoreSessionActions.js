/**
 * This module contains actions related to restoring last session.
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
