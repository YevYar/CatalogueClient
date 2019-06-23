/**
 * This component presents the input for login / registration form.
 *
 * @format
 * @flow
 */

import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

import {
  inputBackgroundColor,
  inputBorderBottomColor
  //inputBorderColor
} from "../../../constants/colors";

type Props = {
  icon: number,
  onBlur: Function,
  onChangeText: Function,
  placeholder: string,
  secureTextEntry?: boolean,
  value: string
};

export default function LRInput(
  /*{ secureTextEntry = false, ...props }: Props*/ props: Props
) {
  props = { secureTextEntry: false, ...props };

  return (
    <View style={styles.inputContainer}>
      <Image source={props.icon} style={styles.inputIcon} />
      <TextInput
        onBlur={() => props.onBlur()}
        onChangeText={text => props.onChangeText(text)}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        style={styles.input}
        underlineColorAndroid="transparent"
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  inputContainer: {
    alignItems: "center",
    backgroundColor: inputBackgroundColor,
    borderBottomColor: inputBorderBottomColor,
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
  inputIcon: {
    height: 30,
    justifyContent: "center",
    marginLeft: 15,
    width: 30
  },
  input: {
    borderBottomColor: inputBorderBottomColor /*inputBorderColor*/,
    flex: 1,
    fontSize: 16,
    height: 45,
    marginLeft: 16
  }
});
