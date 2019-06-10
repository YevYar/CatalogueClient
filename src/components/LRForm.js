/**
 * This component presents the login / registration form.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

import { PASSWORD } from "../images/images";
import { USERNAME } from "../images/images";

type Props = {
  confirmPassword: boolean,
  errorPasswordText: string,
  errorUsernameText: string,
  onSubmit: Function,
  passwordValidation: Function,
  submitButtonText: string,
  usernameValidation: Function
};
type States = {
  cPassword: string,
  cPasswordError: boolean,
  password: string,
  passwordError: boolean,
  username: string,
  usernameError: boolean
};
export default class LRForm extends Component<Props, States> {
  static defaultProps = {
    confirmPassword: false,
    errorPasswordText: "Password can't be empty",
    errorUsernameText: "Username can't be empty",
    passwordValidation: () => true,
    usernameValidation: () => true
  };

  constructor(props: Object, defaultProps: Object) {
    super(props, defaultProps);
    this.state = {
      cPassword: "",
      cPasswordError: false,
      password: "",
      passwordError: false,
      username: "",
      usernameError: false
    };
  }

  confirmPasswordValidation(cPass: string = this.state.cPassword) {
    if (this.props.confirmPassword) {
      if (cPass.length === 0 || this.state.password !== cPass) {
        this.setState({ cPasswordError: true });
        return false;
      } else {
        this.setState({ cPasswordError: false });
        return true;
      }
    } else return true;
  }

  passwordValidation(password: string = this.state.password) {
    if (this.state.cPassword.length > 0)
      this.confirmPasswordValidation(password);
    if (password.length === 0 || !this.props.passwordValidation(password)) {
      this.setState({ passwordError: true });
      return false;
    } else {
      this.setState({ passwordError: false });
      return true;
    }
  }

  usernameValidation(username: string = this.state.username) {
    if (username.length === 0 || !this.props.usernameValidation(username)) {
      this.setState({ usernameError: true });
      return false;
    } else {
      this.setState({ usernameError: false });
      return true;
    }
  }

  render() {
    const confirmPassword = this.props.confirmPassword ? (
      <View style={styles.inputContainer}>
        <Image source={PASSWORD} style={styles.inputIcon} />
        <TextInput
          onChangeText={password => this.setState({ cPassword: password })}
          onEndEditing={() => {
            this.confirmPasswordValidation();
          }}
          placeholder="Confirm password"
          secureTextEntry={true}
          style={styles.inputs}
          underlineColorAndroid="transparent"
        />
      </View>
    ) : (
      <View />
    );

    const cPasswordError = this.state.cPasswordError ? (
      <Text style={styles.error}>Passwords must be equal</Text>
    ) : (
      <Text style={styles.error} />
    );

    const passwordError = this.state.passwordError ? (
      <Text style={styles.error}>{this.props.errorPasswordText}</Text>
    ) : (
      <Text style={styles.error} />
    );

    const usernameError = this.state.usernameError ? (
      <Text style={styles.error}>{this.props.errorUsernameText}</Text>
    ) : (
      <Text style={styles.error} />
    );

    return (
      <KeyboardAvoidingView enabled style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={USERNAME} style={styles.inputIcon} />
          <TextInput
            onChangeText={username => {
              this.setState({ username: username });
              this.usernameValidation(username);
            }}
            onEndEditing={() => this.usernameValidation()}
            placeholder="Username"
            style={styles.inputs}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.errorTextWrapper}>{usernameError}</View>

        <View style={styles.inputContainer}>
          <Image source={PASSWORD} style={styles.inputIcon} />
          <TextInput
            onChangeText={password => {
              this.passwordValidation(password);
              this.setState({ password: password });
            }}
            onEndEditing={() => this.passwordValidation()}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputs}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.errorTextWrapper}>{passwordError}</View>

        {confirmPassword}
        <View style={styles.errorTextWrapper}>{cPasswordError}</View>

        <TouchableHighlight
          onPress={() => {
            if (
              this.usernameValidation() &&
              this.passwordValidation() &&
              this.confirmPasswordValidation()
            ) {
              this.props.onSubmit(this.state.username, this.state.password);
            }
          }}
          style={styles.buttonContainer}
          underlayColor="#F1C408"
        >
          <Text style={styles.buttonText}>{this.props.submitButtonText}</Text>
        </TouchableHighlight>
        {this.props.children}
      </KeyboardAvoidingView>
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
    flex: 1,
    justifyContent: "center",
    paddingTop: 70
  },
  errorTextWrapper: {
    flexDirection: "row",
    paddingLeft: 3,
    paddingRight: 3
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#F5FCFF",
    borderBottomWidth: 1,
    borderRadius: 7,
    flexDirection: "row",
    height: 45,
    marginBottom: 30,
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
  error: {
    color: "red",
    flexWrap: "wrap",
    fontSize: 15,
    marginBottom: 12,
    marginTop: -28,
    minHeight: 20,
    textAlign: "center"
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
