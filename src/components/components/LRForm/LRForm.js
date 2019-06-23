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
import { PASSWORD, USERNAME } from "../../../constants/images";
import {
  additionalDark,
  mainLight,
  mainTextColorOnDarkBG
} from "../../../constants/colors";

type Props = {
  children?: Object,
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
    console.log("console.log(props.validationSchema)");
    console.log(props.validationSchema);
  }

  render() {
    return (
      <Formik
        initialValues={{ confirmPassword: "", password: "", username: "" }}
        onSubmit={values =>
          this.props.onSubmit(values.username, values.password)
        }
        validationSchema={this.props.validationSchema}
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
              underlayColor={mainLight}
            >
              <Text style={styles.buttonText}>
                {this.props.submitButtonText}
              </Text>
            </TouchableHighlight>
            {this.props.children}
          </KeyboardAvoidingView>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  buttonContainer: {
    alignItems: "center",
    backgroundColor: additionalDark,
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
    color: mainTextColorOnDarkBG,
    fontSize: 20
  }
});
