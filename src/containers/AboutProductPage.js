/**
 * This container (can be called a screen or page) presents information about the selected product.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Alert,
  Dimensions,
  Image as SImage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import Image from "react-native-image-progress";
import { PLACEHOLDER_BIG } from "../images/images";
import ProgressCircleSnail from "react-native-progress/CircleSnail";
import { Rating } from "react-native-ratings";

type Props = {};
type States = { height: number, loadError: boolean, width: number };
export default class AboutProductPage extends Component<Props, States> {
  state = {
    height: 100,
    loadError: false,
    width: 100
  };

  changeToDefaultImg() {
    this.setState({ loadError: true });
  }

  defineImageDimensions() {
    let accessibleHeight = Dimensions.get("window").height;
    let accessibleWidth = Dimensions.get("window").width;
    accessibleHeight /= 2;
    accessibleWidth -= 20;

    Image.getSize(
      //"https://cdn.pixabay.com/photo/2016/08/03/06/22/space-1565986_960_720.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Very_Large_Array_dish_scale.jpg",
      //"http://smktesting.herokuapp.com/static/img1.png",
      (width, height) => {
        let proportions = width / height;
        if (width > accessibleWidth) {
          width = accessibleWidth;
          height = width / proportions;
        }
        if (height > accessibleHeight) {
          height = accessibleHeight;
          width = height * proportions;
        }
        this.setState({ width, height });
      },
      () => {}
    );
  }

  render() {
    let img = this.state.loadError ? (
      <SImage source={PLACEHOLDER_BIG} style={styles.placeholderImg} />
    ) : (
      <Image
        source={{
          uri:
            //"https://cdn.pixabay.com/photo/2016/08/03/06/22/space-1565986_960_720.jpg"
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Very_Large_Array_dish_scale.jpg"
          //"http://smktesting.herokuapp.com/static/img1.png"
        }}
        indicator={ProgressCircleSnail}
        indicatorProps={{ color: "rgba(30, 144, 255, 1)" }}
        onError={() => this.changeToDefaultImg()}
        onLoad={() => this.defineImageDimensions()}
        resizeMode="contain"
        style={{
          alignSelf: "center",
          height: this.state.height,
          width: this.state.width
        }}
        threshold={0}
      />
    );

    return (
      <ScrollView style={styles.page}>
        <View>
          <Text style={styles.name}>Name</Text>
          {img}
          <Rating
            fractions={2}
            imageSize={30}
            readonly
            showRating
            startingValue={5}
            style={styles.rating}
          />
          <Text style={styles.description}>About</Text>
          <View style={styles.endLine} />
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("Comments")}
            style={styles.commentsButton}
            underlayColor="#1E90FF"
          >
            <Text style={styles.commentsButtonText}>COMMENTS</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  page: {
    backgroundColor: "white",
    flex: 1
  },

  /******************
   * element styles *
   ******************/
  commentsButton: {
    alignSelf: "stretch",
    backgroundColor: "#F1C408",
    borderColor: "#1E90FF",
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    margin: 10,
    marginTop: 15,
    padding: 8
  },
  commentsButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  description: {
    color: "black",
    fontSize: 17,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    paddingBottom: 10,
    textAlign: "justify"
  },
  endLine: {
    borderBottomColor: "#1E90FF",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  name: {
    alignSelf: "stretch",
    borderBottomColor: "#1E90FF",
    borderBottomWidth: 1,
    color: "#1E90FF",
    fontSize: 21,
    fontWeight: "bold",
    margin: 10,
    paddingBottom: 10,
    textAlign: "left"
  },
  placeholderImg: {
    alignSelf: "center",
    height: 200,
    width: 200
  },
  rating: {
    marginTop: 10
  }
});
