/**
 * This component presents the single comment.
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Rating } from "react-native-ratings";

export default function Comment(props: Object) {
  let date = new Date(props.dateTime);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  date = date.toLocaleString("en-UK", options);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.time}>{date}</Text>
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
Comment.propTypes = {
  dateTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    alignItems: "flex-start",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 3,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 7,
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
    fontSize: 13.5,
    fontStyle: "italic",
    textAlign: "right"
  }
});
