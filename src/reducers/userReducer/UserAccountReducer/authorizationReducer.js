/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to login.
 *
 * @format
 * @flow
 */

function loginSuccess(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE im AUTHORIZATION_REDUCER");
  console.log(action.type);
  console.log(state);
  console.log("token: " + action.token);
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

export default { LOGIN_SUCCESS: loginSuccess };
