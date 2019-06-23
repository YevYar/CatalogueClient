/**
 * This component presents the screen activity indicator.
 * It is displayed on the screen, when some array is fetched from the server.
 *
 * @format
 * @flow
 */

import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { mainDark } from "../../constants/colors";

export default function ScreenActivityIndicator() {
  return (
    <ActivityIndicator
      size={55}
      color={mainDark}
      style={styles.activityIndicator}
    />
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    alignSelf: "center"
  }
});
