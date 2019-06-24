/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to registration.
 *
 * @format
 * @flow
 */

function registerSuccess(state: Object, action: Object) {
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

export default { REGISTER_SUCCESS: registerSuccess };
