/**
 * This component presents the account button in the header.
 *
 * @format
 * @flow
 */

import React from "react";
import { Image, StyleSheet, TouchableHighlight } from "react-native";

import { ACCOUNT } from "../images/images";

export default function AccountButton(props) {
  return (
    <TouchableHighlight
      onPress={() => props.onPress()}
      style={styles.container}
      underlayColor="#F1C408"
    >
      <Image source={ACCOUNT} style={styles.image} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    height: 56,
    padding: 4,
    paddingLeft: 5,
    paddingRight: 3,
    width: 56
  },

  /******************
   * element styles *
   ******************/
  image: {
    flex: 1
  }
});
