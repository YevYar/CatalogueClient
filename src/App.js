/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import CommentsPage from "./containers/CommentsPage";
import AboutProductPage from "./containers/AboutProductPage";
//import Comment from "./components/Comment";
//import CommentInput from "./components/CommentInput";
import Login from "./components/Login";
//import ProductRow from "./components/ProductRow";

type Props = {};
type States = {};
export default class App extends Component<Props, States> {
  render() {
    return (
      // <View style={styles.container}>
      //   <ProductRow />
      //   <ProductRow />
      // </View>
      //<AboutProductPage />
      //<CommentsPage />
      <Login />
    );
  }
}

/* spell-checker: disable */
const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center"
  }
});
