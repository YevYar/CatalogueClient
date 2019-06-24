/**
 * This module contains the reducer that updates the store
 * in the result of the restore session actions.
 *
 * @format
 * @flow
 */

function restoreSessionSuccess(state: Object, action: Object) {
  return {
    ...state,
    appState: { ...state.appState, isLogged: true },
    domainData: {
      ...state.domainData,
      token: action.token,
      username: action.username
    }
  };
}

export default { RESTORE_SESSION_SUCCESS: restoreSessionSuccess };
