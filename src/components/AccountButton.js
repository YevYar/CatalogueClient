/**
 * This component presents the account button in the header.
 *
 * @format
 * @flow
 */

import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

import { ACCOUNT } from "../images/images";

function AccountButton(props) {
  const element = props.isLogged ? (
    <Text style={styles.text}>
      Hello, {"\n"} <Text style={styles.name}>{props.username}</Text>
    </Text>
  ) : (
    <Image source={ACCOUNT} style={styles.image} />
  );

  return (
    <TouchableHighlight
      onPress={() => props.onPress()}
      style={styles.container}
      underlayColor="#F1C408"
    >
      {element}
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
    paddingRight: 3
  },

  /******************
   * element styles *
   ******************/
  image: {
    height: 48,
    width: 48
  },
  name: {
    textDecorationLine: "underline"
  },
  text: {
    fontSize: 15.5,
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged,
    username: state.username
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButton);
