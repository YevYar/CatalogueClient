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
import ProgressCircleSnail from "react-native-progress/CircleSnail";

import { PLACEHOLDER } from "../../constants/images";
import {
  listElementBackground,
  listElementBorder,
  mainDark,
  screenBackground,
  mainTextColor
} from "../../constants/colors";

type Props = { image: string, onPress: Function, text: string, title: String };
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
        indicatorProps={{ color: mainDark }}
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
          underlayColor={screenBackground}
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
    backgroundColor: listElementBackground,
    borderColor: listElementBorder,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 140,
    padding: 5
  },
  descriptionBlock: {
    borderLeftColor: listElementBorder,
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
    color: mainTextColor,
    fontSize: 16
  },
  image: {
    flex: 1
  },
  name: {
    color: mainTextColor,
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
