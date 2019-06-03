/**
 * This component presents the single comment.
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

export default function Comment(props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.time}>2015-10-08T13:58:57 .656Z</Text>
      </View>
      <Rating imageSize={20} readonly startingValue={2} />
      <Text style={styles.text}>
        This is a device which I do not know how to use.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    alignItems: "flex-start",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 4,
    minHeight: 80,
    padding: 5
  },
  text: {
    color: "black",
    fontSize: 16,
    marginTop: 7,
    textAlign: "justify"
  },
  title: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7
  },

  /******************
   * element styles *
   ******************/
  name: {
    color: "#1E90FF",
    flex: 1,
    fontSize: 18,
    fontWeight: "bold"
  },
  time: {
    color: "black",
    flex: 1,
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "right"
  }
});
