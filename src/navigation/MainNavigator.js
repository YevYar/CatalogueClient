/**
 * This module contains main app navigator (stack navigator).
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator } from "react-navigation";

import AboutProductContainer from "../containers/AboutProductContainer";
import AccountButtonContainer from "../containers/AccountButtonContainer";
import CommentsContainer from "../containers/CommentsContainer";
import LoginContainer from "../containers/LoginContainer";
import ProductsContainer from "../containers/ProductsContainer";
import RegistrationContainer from "../containers/RegistrationContainer";
import { mainDark, navHeaderElementsColor } from "../constants/colors";

export default createStackNavigator(
  {
    Home: {
      screen: ProductsContainer,
      navigationOptions: { title: "Products" }
    },
    About: {
      screen: AboutProductContainer,
      navigationOptions: { title: "About product" }
    },
    Comments: {
      screen: CommentsContainer,
      navigationOptions: { title: "Comments" }
    },
    Login: {
      screen: LoginContainer,
      navigationOptions: { headerRight: null, title: "Login" }
    },
    Registration: {
      screen: RegistrationContainer,
      navigationOptions: { headerRight: null, title: "Registration" }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <AccountButtonContainer onPress={() => navigation.navigate("Login")} />
      ),
      headerStyle: {
        backgroundColor: mainDark
      },
      headerTintColor: navHeaderElementsColor,
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: "bold"
      }
    }),
    initialRouteName: "Home"
  }
);
