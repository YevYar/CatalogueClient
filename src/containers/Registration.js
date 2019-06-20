/**
 * This container (can be called a screen or page) presents the registration page.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { connect } from "react-redux";
import * as yup from "yup";

import LRForm from "../components/LRForm/LRForm";
import { register } from "../middlewares/UserAccountMiddleware/RegistrationMiddleware";

function equalTo(ref, msg) {
  return this.test({
    name: "equalTo",
    exclusive: false,
    message: msg /* || '${path} must be the same as ${reference}'*/,
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref);
    }
  });
}
yup.addMethod(yup.string, "equalTo", equalTo);

type Props = { navigation: Object, register: Function };
type States = {};
class Registration extends Component<Props, States> {
  render() {
    return (
      <View style={styles.container}>
        <LRForm
          confirmPassword={true}
          onSubmit={this.props.register}
          submitButtonText={"Sign up"}
          validationSchema={yup.object().shape({
            confirmPassword: yup
              .string()
              .equalTo(yup.ref("password"), "Passwords must be equal"),
            //.required("You must confirm password"),
            password: yup
              .string()
              .min(4, "Password must be more than 3 symbols")
              .max(15, "Password must be less than 16 symbols")
              .matches(
                /^([0-9A-Za-z]*)$/,
                "Password can contain only latin letters and digits"
              )
              .required("Password is a required field"),
            username: yup
              .string()
              .min(3, "Username must be more than 2 symbols")
              .max(12, "Username must be less than 13 symbols")
              .matches(
                /^([0-9A-Za-z]*)$/,
                "Username can contain only latin letters and digits"
              )
              .required("Username is a required field")
          })}
        >
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Login")}
            style={styles.buttonContainerWithoutDecor}
            underlayColor="transparent"
          >
            <Text style={styles.additionalButtonText}>Sign in</Text>
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

const mapDispatchToProps = { register };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
