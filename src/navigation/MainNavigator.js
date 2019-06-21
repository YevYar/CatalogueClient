/**
 * This module contains main app navigator (stack navigator).
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator } from "react-navigation";

import AboutProductPage from "../containers/AboutProductPage";
import AccountButton from "../components/AccountButton";
import CommentsPage from "../containers/CommentsPage";
import Login from "../containers/Login";
import ProductsPage from "../containers/ProductsPage";
import Registration from "../containers/Registration";
import { mainDark, navHeaderElementsColor } from "../constants/colors";

export default createStackNavigator(
  {
    Home: { screen: ProductsPage, navigationOptions: { title: "Products" } },
    About: {
      screen: AboutProductPage,
      navigationOptions: { title: "About product" }
    },
    Comments: {
      screen: CommentsPage,
      navigationOptions: { title: "Comments" }
    },
    Login: {
      screen: Login,
      navigationOptions: { headerRight: null, title: "Login" }
    },
    Registration: {
      screen: Registration,
      navigationOptions: { headerRight: null, title: "Registration" }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <AccountButton onPress={() => navigation.navigate("Login")} />
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
