/**
 * This component presents the login page.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight } from "react-native";

import LRForm from "./LRForm";

type Props = {};
type States = {
  password: string,
  username: string
};
export default class Login extends Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
  }

  render() {
    return (
      <LRForm
        onSubmit={() => Alert.alert("Submit")}
        submitButtonText={"Sign in"}
      >
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Registration")}
          style={[styles.buttonContainer, styles.buttonContainerWithoutDecor]}
          underlayColor="transparent"
        >
          <Text style={styles.additionalButtonText}>Sign up</Text>
        </TouchableHighlight>
      </LRForm>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#00b5ec",
    borderRadius: 10,
    flexDirection: "row",
    height: 45,
    justifyContent: "center",
    marginBottom: 15,
    width: 250
  },
  buttonContainerWithoutDecor: {
    backgroundColor: "transparent",
    height: 30
  },
  container: {
    alignItems: "center",
    backgroundColor: "rgba(30, 144, 255, 0.2)",
    flex: 1,
    justifyContent: "center"
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#F5FCFF",
    borderBottomWidth: 1,
    borderRadius: 7,
    flexDirection: "row",
    height: 45,
    marginBottom: 20,
    width: 250
  },

  /******************
   * element styles *
   ******************/
  additionalButtonText: {
    fontSize: 17
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  inputIcon: {
    height: 30,
    justifyContent: "center",
    marginLeft: 15,
    width: 30
  },
  inputs: {
    borderBottomColor: "#FFFFFF",
    flex: 1,
    fontSize: 16,
    height: 45,
    marginLeft: 16
  }
});
