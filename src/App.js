/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import ProductRow from "./components/ProductRow";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
type States = { counter: number };
export default class App extends Component<Props, States> {
  state = {
    counter: 0
  };

  addOne() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <ProductRow />
        <ProductRow />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{this.state.counter}</Text>
        <Button title="Increment" onPress={() => this.addOne()} />
      </View>
    );
  }
}

/* spell-checker: disable */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
