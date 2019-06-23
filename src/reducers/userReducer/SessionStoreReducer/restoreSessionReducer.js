/**
 * This module contains the reducer that updates the store
 * in the result of the restore session actions.
 *
 * @format
 * @flow
 */

function restoreSessionSuccess(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE in RESTORE_SESSION_REDUCER");
  console.log(action.type);
  console.log(state);
  console.log("token: " + action.token);
  console.log("username: " + action.username);
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
