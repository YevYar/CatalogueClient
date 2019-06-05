/**
 * This component presents the comment input.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import { AirbnbRating } from "react-native-ratings";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { _1STAR } from "../images/images";
import { _2STARS } from "../images/images";
import { _3STARS } from "../images/images";
import { _4STARS } from "../images/images";
import { _5STARS } from "../images/images";
import { CLOSE } from "../images/images";

type Props = { onClosePress: Function };
type States = { rating: number };
export default class CommentInput extends Component<Props, States> {
  constructor(props) {
    super(props);
    //this.onClosePress = props.onClosePress.bind(this);
  }

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
        <TouchableHighlight
          style={styles.closeIconBlock}
          onPress={() => this.props.onClosePress()}
        >
          <Image source={CLOSE} style={styles.closeIcon} />
        </TouchableHighlight>
        <Image source={imgSrc} />
        <AirbnbRating
          defaultRating={5}
          onFinishRating={value => this.changeRating(value)}
          size={32}
        />
        <AutoGrowingTextInput
          enableScrollToCaret
          maxHeight={135}
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
    backgroundColor: "rgba(110, 170, 200, 0.7)",
    borderColor: "gold",
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 140,
    paddingTop: 7
  },
  closeIconBlock: {
    position: "absolute",
    right: 10,
    top: 5
  },

  /******************
   * element styles *
   ******************/
  closeIcon: {
    height: 25,
    width: 25
  },
  input: {
    alignSelf: "stretch",
    backgroundColor: "white",
    borderBottomWidth: 0,
    borderColor: "gold",
    borderRadius: 15,
    borderWidth: 2,
    fontSize: 16,
    marginTop: 5,
    padding: 10
  }
});
