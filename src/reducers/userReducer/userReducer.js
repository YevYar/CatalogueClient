/**
 * This module contains the reducer that combines all reducers related to the userState.
 *
 * @format
 * @flow
 */

import authorizationReducer from "./UserAccountReducer/authorizationReducer";
import logoutReducer from "./UserAccountReducer/logoutReducer";
import registrationReducer from "./UserAccountReducer/registrationReducer";
import restoreSessionReducer from "./SessionStoreReducer/restoreSessionReducer";

const reducerFunctions = {
  ...authorizationReducer,
  ...logoutReducer,
  ...registrationReducer,
  ...restoreSessionReducer
};

export default function userReducer(state: Object, action: Object) {
  if (reducerFunctions.hasOwnProperty(action.type))
    return reducerFunctions[action.type](state, action);
  else return state;
}
