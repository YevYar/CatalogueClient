/**
 * This component presents the comment input.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

import { AirbnbRating } from "react-native-ratings";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { _1STAR } from "../images/images";
import { _2STARS } from "../images/images";
import { _3STARS } from "../images/images";
import { _4STARS } from "../images/images";
import { _5STARS } from "../images/images";

type Props = {};
type States = { rating: number };
export default class CommentInput extends Component<Props, States> {
  state = {
    rating: 5
  };

  changeRating(value) {
    this.setState({ rating: value });
  }

  render() {
    let imgSrc;
    switch (this.state.rating) {
      case 1:
        imgSrc = _1STAR;
        break;
      case 2:
        imgSrc = _2STARS;
        break;
      case 3:
        imgSrc = _3STARS;
        break;
      case 4:
        imgSrc = _4STARS;
        break;
      case 5:
        imgSrc = _5STARS;
        break;
    }

    return (
      <View style={styles.container}>
        <Image source={imgSrc} />
        <AirbnbRating
          defaultRating={5}
          onFinishRating={value => this.changeRating(value)}
          size={30}
        />
        <AutoGrowingTextInput
          enableScrollToCaret
          maxHeight={150}
          minHeight={45}
          placeholder={"Your comment"}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    alignItems: "center",
    backgroundColor: "rgba(30, 144, 255, 0.04)",
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 140,
    paddingTop: 7
  },

  /******************
   * element styles *
   ******************/
  input: {
    alignSelf: "stretch",
    backgroundColor: "white",
    borderBottomWidth: 0,
    borderColor: "#1E90FF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 2,
    fontSize: 16,
    padding: 10
  }
});
