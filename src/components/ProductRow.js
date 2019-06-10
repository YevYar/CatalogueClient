/**
 * This component presents the product row in the product list.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Image as SImage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import Image from "react-native-image-progress";
import { PLACEHOLDER } from "../images/images";
import ProgressCircleSnail from "react-native-progress/CircleSnail";

type Props = { image: string, onPress: Function, title: String, text: string };
type States = { loadError: boolean };
export default class ProductRow extends Component<Props, States> {
  state = {
    loadError: false
  };

  changeToDefaultImg() {
    this.setState({ loadError: true });
  }

  render() {
    let img = this.state.loadError ? (
      <SImage source={PLACEHOLDER} style={styles.placeholderImg} />
    ) : (
      <Image
        source={{ uri: this.props.image }}
        indicator={ProgressCircleSnail}
        indicatorProps={{ color: "rgba(30, 144, 255, 1)" }}
        onError={() => this.changeToDefaultImg()}
        resizeMode="contain"
        style={styles.image}
        threshold={0}
      />
    );

    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          onPress={() => this.props.onPress()}
          underlayColor="rgba(30, 144, 255, 0.1)"
        >
          <View style={styles.container}>
            <View style={styles.imageBlock}>{img}</View>
            <View style={styles.descriptionBlock}>
              <Text style={styles.name}>{this.props.title}</Text>
              <Text style={styles.brief}>{this.props.text}</Text>
              <Text />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    alignItems: "stretch",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 140,
    padding: 5
  },
  descriptionBlock: {
    borderLeftColor: "black",
    borderLeftWidth: 1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 5,
    paddingLeft: 5
  },
  imageBlock: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  wrapper: {
    marginBottom: 5,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 7
  },

  /******************
   * element styles *
   ******************/
  brief: {
    color: "black",
    fontSize: 16
  },
  image: {
    flex: 1
  },
  name: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5
  },
  placeholderImg: {
    alignSelf: "center",
    height: 100,
    width: 100
  }
});
