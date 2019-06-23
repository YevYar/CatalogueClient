/**
 * This screen (or page) presents the login page.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import * as yup from "yup";

import LRForm from "../components/LRForm/LRForm";
import {
  additionalTextColor,
  screenBackground_2
} from "../../constants/colors";

type Props = {
  goTo: Function,
  login: Function,
  //navigation: Object,
  validationSchema?: yup.Schema
};
type States = {};

export default class LoginScreen extends Component<Props, States> {
  render() {
    return (
      <View style={styles.container}>
        <LRForm
          onSubmit={this.props.login}
          submitButtonText={"Sign in"}
          validationSchema={this.props.validationSchema}
        >
          <TouchableHighlight
            onPress={
              () => this.props.goTo()
              //() => this.props.navigation.navigate("Registration")
            }
            style={styles.buttonContainerWithoutDecor}
            underlayColor="transparent"
          >
            <Text style={styles.additionalButtonText}>Sign up</Text>
          </TouchableHighlight>
        </LRForm>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  buttonContainerWithoutDecor: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
    marginBottom: 15,
    width: 250
  },
  container: {
    alignItems: "center",
    backgroundColor: screenBackground_2,
    flex: 1,
    justifyContent: "center"
  },

  /******************
   * element styles *
   ******************/
  additionalButtonText: {
    color: additionalTextColor,
    fontSize: 17
  }
});
