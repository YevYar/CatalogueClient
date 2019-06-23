/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to logout.
 *
 * @format
 * @flow
 */

function logoutSuccess(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE in LOGOUT_REDUCER");
  console.log(action.type);
  console.log(state);
  return {
    ...state,
    appState: { ...state.appState, isLogged: false },
    domainData: {
      ...state.domainData,
      token: "",
      username: ""
    }
  };
}

export default { LOGOUT_SUCCESS: logoutSuccess };
