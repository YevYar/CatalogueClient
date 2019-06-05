/**
 * This component presents the login form.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

import { EMAIL } from "../images/images";
import { PASSWORD } from "../images/images";

export default class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={EMAIL} style={styles.inputIcon} />
          <TextInput
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            style={styles.inputs}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={PASSWORD} style={styles.inputIcon} />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputs}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableHighlight
          onPress={() => this.onClickListener("login")}
          style={[styles.buttonContainer, styles.loginButton]}
          underlayColor="#F1C408"
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this.onClickListener("restore_password")}
          style={[styles.buttonContainer, styles.buttonContainerWithoutDecor]}
        >
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this.onClickListener("register")}
          style={[styles.buttonContainer, styles.buttonContainerWithoutDecor]}
        >
          <Text>Registration</Text>
        </TouchableHighlight>
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
    borderRadius: 10,
    flexDirection: "row",
    height: 45,
    justifyContent: "center",
    marginBottom: 15,
    width: 250
  },
  buttonContainerWithoutDecor: {
    height: 30,
    marginBottom: 10
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
  },
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white",
    fontSize: 20
  }
});
