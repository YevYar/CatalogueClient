/**
 * This component presents the error message for login / registration form.
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  errorMessage: string
};
export default function LRInput(props: Props) {
  return (
    <View style={styles.errorTextWrapper}>
      <Text style={styles.error}>{props.errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  errorTextWrapper: {
    flexDirection: "row",
    paddingLeft: 3,
    paddingRight: 3
  },

  /******************
   * element styles *
   ******************/
  error: {
    color: "red",
    flexWrap: "wrap",
    fontSize: 14,
    //marginBottom: 12,
    marginTop: -30,
    minHeight: 10,
    textAlign: "center"
  }
});
