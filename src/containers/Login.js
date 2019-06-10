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
import LRForm from "../components/LRForm";

type Props = { login: Function, navigation: Object };
type States = {
  password: string,
  username: string
};
class Login extends Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LRForm onSubmit={this.props.login} submitButtonText={"Sign in"}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Registration")}
            style={[styles.buttonContainer, styles.buttonContainerWithoutDecor]}
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
    backgroundColor: "rgba(30, 144, 255, 0.1)",
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
