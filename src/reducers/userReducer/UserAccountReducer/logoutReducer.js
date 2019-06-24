/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to logout.
 *
 * @format
 * @flow
 */

function logoutSuccess(state: Object, action: Object) {
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
