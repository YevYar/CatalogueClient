/**
 * This component presents the login / registration form.
 *
 * @format
 * @flow
 */

import { Formik } from "formik";
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import * as yup from "yup";

import LRErrorMessage from "./LRErrorMessage";
import LRInput from "./LRInput";
import { PASSWORD, USERNAME } from "../../images/images";

type Props = {
  confirmPassword?: boolean,
  onSubmit: Function,
  submitButtonText: string,
  validationSchema?: yup.Schema
};
type States = {};
export default class LRForm extends Component<Props, States> {
  static defaultProps = {
    confirmPassword: false,
    validationSchema: yup.object().shape({
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
    })
  };

  constructor(props: Props, defaultProps: Object) {
    super(props, defaultProps);
  }

  render() {
    return (
      // <KeyboardAvoidingView enabled style={styles.container}>
      //   <LRInput
      //     icon={USERNAME}
      //     onChangeText={username => {
      //       this.setState({ username: username });
      //       this.usernameValidation(username);
      //     }}
      //     onEndEditing={() => this.usernameValidation()}
      //     placeholder="Username"
      //   />
      //   <View style={styles.errorTextWrapper}>{usernameError}</View>

      //   <LRInput
      //     icon={PASSWORD}
      //     onChangeText={password => {
      //       this.setState({ password: password });
      //       this.passwordValidation(/*password*/);
      //     }}
      //     onEndEditing={() => this.passwordValidation()}
      //     placeholder="Password"
      //     secureTextEntry={true}
      //   />
      //   <View style={styles.errorTextWrapper}>{passwordError}</View>

      //   {confirmPassword}
      //   <View style={styles.errorTextWrapper}>{cPasswordError}</View>

      //   <TouchableHighlight
      //     onPress={() => {
      //       if (
      //         this.usernameValidation() &&
      //         this.passwordValidation() &&
      //         this.confirmPasswordValidation()
      //       ) {
      //         this.props.onSubmit(this.state.username, this.state.password);
      //       }
      //     }}
      //     style={styles.buttonContainer}
      //     underlayColor="#F1C408"
      //   >
      //     <Text style={styles.buttonText}>{this.props.submitButtonText}</Text>
      //   </TouchableHighlight>
      //   {this.props.children}

      <Formik
        initialValues={{ confirmPassword: "", password: "", username: "" }}
        onSubmit={values =>
          /*Alert.alert(
              JSON.stringify(values)
            )*/ this.props.onSubmit(
            values.username,
            values.password
          )
        }
        validationSchema={
          this.props.validationSchema

          // yup.object().shape({
          //   confirmPassword: yup
          //     .string()
          //     .equalTo(yup.ref("password"), "Passwords must be equal"),
          //   //.required("You must confirm password"),
          //   password: yup
          //     .string()
          //     .min(4, "Password must be more than 3 symbols")
          //     .max(15, "Password must be less than 16 symbols")
          //     .matches(
          //       /^([0-9A-Za-z]*)$/,
          //       "Password can contain only latin letters and digits"
          //     )
          //     .required("Password is a required field"),
          //   username: yup
          //     .string()
          //     .min(3, "Username must be more than 2 symbols")
          //     .max(12, "Username must be less than 13 symbols")
          //     .matches(
          //       /^([0-9A-Za-z]*)$/,
          //       "Username can contain only latin letters and digits"
          //     )
          //     .required("Username is a required field")
          // })

          // yup.object().shape({
          //   confirmPassword: yup
          //     .string()
          //     .equalTo(yup.ref("password"), "Passwords must be equal"),
          //   //.required("You must confirm password"),
          //   password: yup
          //     .string()
          //     .min(4, "Password must be more than 3 symbols")
          //     .max(15, "Password must be less than 16 symbols")
          //     .required("Password is a required field"),
          //   username: yup
          //     .string()
          //     .min(3, "Username must be more than 2 symbols")
          //     .max(12, "Username must be less than 13 symbols")
          //     .required("Username is a required field")
          // })
        }
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          handleSubmit
        }) => (
          <KeyboardAvoidingView enabled style={styles.container}>
            <LRInput
              icon={USERNAME}
              onBlur={() => setFieldTouched("username")}
              onChangeText={handleChange("username")}
              placeholder="Username"
              value={values.username}
            />
            {touched.username && errors.username && (
              <LRErrorMessage errorMessage={errors.username} />
            )}

            <LRInput
              icon={PASSWORD}
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
              value={values.password}
            />
            {touched.password && errors.password && (
              <LRErrorMessage errorMessage={errors.password} />
            )}

            {this.props.confirmPassword && (
              <LRInput
                icon={PASSWORD}
                onBlur={() => setFieldTouched("confirmPassword")}
                onChangeText={handleChange("confirmPassword")}
                placeholder="Confirm password"
                secureTextEntry={true}
                value={values.confirmPassword}
              />
            )}
            {this.props.confirmPassword &&
              touched.confirmPassword &&
              errors.confirmPassword && (
                <LRErrorMessage errorMessage={errors.confirmPassword} />
              )}

            <TouchableHighlight
              onPress={handleSubmit}
              style={styles.buttonContainer}
              underlayColor="#F1C408"
            >
              <Text style={styles.buttonText}>
                {this.props.submitButtonText}
              </Text>
            </TouchableHighlight>
            {this.props.children}
          </KeyboardAvoidingView>
        )}
      </Formik>
      //</KeyboardAvoidingView>
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
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingTop: 70
  },

  /******************
   * element styles *
   ******************/
  buttonText: {
    color: "white",
    fontSize: 20
  }
});
