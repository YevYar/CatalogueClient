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

import { _1STAR } from "../../constants/images";
import { _2STARS } from "../../constants/images";
import { _3STARS } from "../../constants/images";
import { _4STARS } from "../../constants/images";
import { _5STARS } from "../../constants/images";
import { CLOSE } from "../../constants/images";
import { SEND } from "../../constants/images";
import {
  commentInputBG,
  commentInputBorder,
  inputBackgroundColor
} from "../../constants/colors";

type Props = { onClosePress: Function, onSend: Function };
type States = { comment: string, rating: number };
export default class CommentInput extends Component<Props, States> {
  static defaultProps = {
    onClosePress: () => {},
    onSend: () => {}
  };

  constructor(props: Props, defaultProps: Object) {
    super(props, defaultProps);
    this.state = {
      comment: "",
      rating: 5
    };
  }

  changeComment(str: string) {
    this.setState({ comment: str });
  }

  changeRating(value: number) {
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
          onPress={() => this.props.onClosePress()}
          style={styles.closeIconBlock}
          underlayColor="transparent"
        >
          <Image source={CLOSE} style={styles.closeIcon} />
        </TouchableHighlight>

        <Image source={imgSrc} />

        <AirbnbRating
          defaultRating={5}
          onFinishRating={value => this.changeRating(value)}
          size={32}
        />

        <View style={styles.inputBlock}>
          <AutoGrowingTextInput
            enableScrollToCaret
            maxHeight={135}
            minHeight={45}
            onChangeText={str => this.changeComment(str)}
            placeholder={"Your comment"}
            style={styles.input}
          />
          <TouchableHighlight
            onPress={() =>
              this.props.onSend(this.state.comment, this.state.rating)
            }
            underlayColor="transparent"
          >
            <Image source={SEND} style={styles.inputSend} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  closeIconBlock: {
    position: "absolute",
    right: 10,
    top: 5
  },
  container: {
    alignItems: "center",
    backgroundColor: commentInputBG,
    borderColor: commentInputBorder,
    borderRadius: 20,
    borderWidth: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 140,
    paddingTop: 7
  },
  inputBlock: {
    alignItems: "center",
    backgroundColor: inputBackgroundColor,
    borderBottomWidth: 0,
    borderColor: commentInputBorder,
    borderRadius: 15,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 2,
    paddingLeft: 0
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
    backgroundColor: inputBackgroundColor,
    borderBottomRightRadius: 0,
    borderRadius: 15,
    borderTopRightRadius: 0,
    flex: 1,
    fontSize: 16,
    marginRight: 5,
    padding: 10
  },
  inputSend: {
    height: 52,
    width: 52
  }
});
