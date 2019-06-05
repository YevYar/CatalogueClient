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
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.time}>{props.dateTime}</Text>
      </View>
      <Rating
        fractions={0}
        imageSize={20}
        readonly
        startingValue={props.rating}
      />
      <Text style={styles.text}>{props.text}</Text>
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
    marginTop: 4,
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
    fontSize: 17,
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
