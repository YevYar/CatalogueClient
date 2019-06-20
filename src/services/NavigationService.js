/**
 * This service contains the navigation functions that are used, when navigation prop is inaccessible.
 *
 * @format
 * @flow
 */

import {
  NavigationActions,
  NavigationContainerComponent
} from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  _navigator = navigatorRef;
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

function navigate(routeName: string, params: Object) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  goBack,
  navigate,
  setTopLevelNavigator
};
