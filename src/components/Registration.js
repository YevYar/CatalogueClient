/**
 * This component presents the registration page.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

import LRForm from "./LRForm";
import { register } from "../actionCreators/AsyncActions";

type Props = { register: Function };
type States = {
  password: string,
  passwordConfirmed: string,
  username: string
};
class Registration extends Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordConfirmed: "",
      username: ""
    };
  }

  render() {
    return (
      <LRForm
        confirmPassword={true}
        errorPasswordText={
          "Password must be more than 3 symbols and less than 16 and can contain only latin letters and digits"
        }
        errorUsernameText={
          "Username must be more than 2 symbols and less than 13 and can contain only latin letters and digits"
        }
        onSubmit={this.props.register}
        passwordValidation={str => {
          //str.length > 4 && str.length < 16 ? true : false
          const regExp = RegExp("^([1-zA-Z0-1]{4,15})$");
          return regExp.test(str);
        }}
        submitButtonText={"Sign up"}
        usernameValidation={str => {
          //str.length > 2 && str.length < 14 ? true : false
          const regExp = RegExp("^([1-zA-Z0-1]{3,12})$");
          return regExp.test(str);
        }}
      >
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Login")}
          style={[styles.buttonContainer, styles.buttonContainerWithoutDecor]}
          underlayColor="transparent"
        >
          <Text style={styles.additionalButtonText}>Sign in</Text>
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = { register };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
