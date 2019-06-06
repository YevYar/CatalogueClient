/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

import AboutProductPage from "./containers/AboutProductPage";
import AccountButton from "./components/AccountButton";
import CommentsPage from "./containers/CommentsPage";
import Login from "./components/Login";
import ProductsPage from "./containers/ProductsPage";
import {
  createAppContainer,
  createStackNavigator,
  NavigationActions
} from "react-navigation";

//import Comment from "./components/Comment";
//import CommentInput from "./components/CommentInput";
//import Login from "./components/Login";
//import ProductRow from "./components/ProductRow";

const MainNavigator = createStackNavigator(
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
    Login: { screen: Login, navigationOptions: { title: "Login" } }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <AccountButton onPress={() => navigation.navigate("Login")} />
      ),
      headerStyle: {
        backgroundColor: "#1E90FF"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: "bold"
      }
    }),
    initialRouteName: "Home"
  }
);

//const App = createAppContainer(MainNavigator);
export default createAppContainer(MainNavigator);

//type Props = {};
//type States = {};
/*export default class App extends Component<Props, States> {
  render() {
    return (
      // <View style={styles.container}>
      //   <ProductRow />
      //   <ProductRow />
      // </View>
      //<AboutProductPage />
      //<CommentsPage />
      //<Login />
    );
  }
}*/

/* spell-checker: disable */
/*const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center"
  }
});*/
