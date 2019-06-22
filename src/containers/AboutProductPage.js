/**
 * This container (can be called a screen or page) presents information about the selected product.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Dimensions,
  Image as SImage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import Image from "react-native-image-progress";
import ProgressCircleSnail from "react-native-progress/CircleSnail";
import { connect } from "react-redux";

import { PLACEHOLDER_BIG } from "../constants/images";
import { fetchProductComments } from "../middlewares/CommentMiddleware";
import {
  mainTextColor,
  mainTextColorOnDarkBG,
  mainDark,
  mainLight,
  screenBackground_3
} from "../constants/colors";

type Props = {
  fetchProductComments: Function,
  id: number,
  navigation: Object,
  product: Object
};
type States = { height: number, loadError: boolean, width: number };
class AboutProductPage extends Component<Props, States> {
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
      this.props.product.img,
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
    const { product } = this.props;

    const img = this.state.loadError ? (
      <SImage source={PLACEHOLDER_BIG} style={styles.placeholderImg} />
    ) : (
      <Image
        source={{ uri: product.img }}
        indicator={ProgressCircleSnail}
        indicatorProps={{ color: mainDark }}
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
          <Text style={styles.name}>{product.title}</Text>
          {img}
          <Text style={styles.description}>{product.text}</Text>
          <View style={styles.endLine} />
          <TouchableHighlight
            onPress={() => {
              this.props.fetchProductComments(this.props.id);
              this.props.navigation.navigate("Comments");
            }}
            style={styles.commentsButton}
            underlayColor={mainDark}
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
    backgroundColor: screenBackground_3,
    flex: 1
  },

  /******************
   * element styles *
   ******************/
  commentsButton: {
    alignSelf: "stretch",
    backgroundColor: mainLight,
    borderColor: mainDark,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 4,
    margin: 10,
    marginTop: 15,
    padding: 8
  },
  commentsButtonText: {
    color: mainTextColorOnDarkBG,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  description: {
    color: mainTextColor,
    fontSize: 17,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 15,
    marginTop: 20,
    paddingBottom: 10,
    textAlign: "justify"
  },
  endLine: {
    borderBottomColor: mainDark,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  name: {
    alignSelf: "stretch",
    borderBottomColor: mainDark,
    borderBottomWidth: 1,
    color: mainDark,
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
  }
});

const mapStateToProps = state => {
  const data = state.domainData.products.find(
    x => x.id === state.appState.selectedProduct
  );
  return {
    id: state.appState.selectedProduct,
    product: data
  };
};

const mapDispatchToProps = { fetchProductComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutProductPage);
