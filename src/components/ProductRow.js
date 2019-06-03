/**
 * This component presents the product row in the product list.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Alert,
  Image as SImage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Image from "react-native-image-progress";
import { PLACEHOLDER } from "../images/images";
import ProgressCircleSnail from "react-native-progress/CircleSnail";

type Props = {};
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
        source={{
          uri: "http://smktesting.herokuapp.com/static/img1.png"
        }}
        indicator={ProgressCircleSnail}
        indicatorProps={{ color: "rgba(30, 144, 255, 1)" }}
        onError={() => this.changeToDefaultImg()}
        resizeMode="contain"
        style={styles.image}
        threshold={0}
      />
    );

    return (
      <TouchableHighlight
        underlayColor="rgba(30, 144, 255, 0.1)"
        onPress={() => Alert.alert("WoW")}
      >
        <View style={styles.container}>
          <View style={styles.imageBlock}>{img}</View>
          <View style={styles.descriptionBlock}>
            <Text style={styles.name}>Just device</Text>
            <Text style={styles.brief}>
              This is a device which I do not know how to use.
            </Text>
            <Text />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    alignItems: "stretch",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    //marginBottom: 4,
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

  /******************
   * element styles *
   ******************/
  brief: {
    color: "black",
    fontSize: 15
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
