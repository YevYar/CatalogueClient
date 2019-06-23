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

export default function userReducer(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE in USER_REDUCER");
  console.log(action.type);
  console.log(state);

  const reducerFunctions = {
    ...authorizationReducer,
    ...logoutReducer,
    ...registrationReducer,
    ...restoreSessionReducer
  };
  console.log(reducerFunctions);
  if (reducerFunctions.hasOwnProperty(action.type))
    return reducerFunctions[action.type](state, action);
  else return state;

  /*switch (action.type) {
    case CHANGE_COMMENT_INPUT_VISIBILITY:
      return {
        ...state,
        uiState: { ...state.uiState, isCommentInputVisible: action.isVisible }
      };

    default:
      return {
        catalogueState: catalogueReducer(state.catalogueState, action),
        commentsState: commentReducer(state.commentsState, action),
        userState: userReducer(state.userState, action)
      };
    //return state;
  }*/
}
