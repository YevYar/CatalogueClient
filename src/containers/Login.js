/**
 * This container (can be called a screen or page) presents the login page.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";

import { login } from "../actionCreators/AsyncActions";
import LRForm from "../components/LRForm/LRForm";

type Props = { login: Function, navigation: Object };
type States = {};
class Login extends Component<Props, States> {
  render() {
    return (
      <View style={styles.container}>
        <LRForm onSubmit={this.props.login} submitButtonText={"Sign in"}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Registration")}
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
    backgroundColor: "rgba(30, 144, 255, 0.1)",
    flex: 1,
    justifyContent: "center"
  },

  /******************
   * element styles *
   ******************/
  additionalButtonText: {
    fontSize: 17
  }
});

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
