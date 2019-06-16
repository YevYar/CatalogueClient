/**
 * This container (can be called a screen or page) presents product list.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import ProgressCircleSnail from "react-native-progress/CircleSnail";
import { connect } from "react-redux";

import ProductRow from "../components/ProductRow";
import { fetchProducts } from "../actionCreators/AsyncActions";
import { openProductInfo } from "../actionCreators/SyncActions";

type Props = {
  fetchProducts: Function,
  isProductListLoaded: boolean,
  navigation: Object,
  openProductInfo: Function,
  products: Array<Object>
};
type States = { isProgressBarVisible: boolean };
class ProductsPage extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isProgressBarVisible: false
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({
        isProgressBarVisible: true
      });
    });
  }

  render() {
    const { products } = this.props;
    console.log("render product list");
    let content = this.props.isProductListLoaded ? (
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductRow
            image={item.img}
            onPress={() => {
              this.props.openProductInfo(item.id);
              this.props.navigation.navigate("About");
            }}
            text={item.text}
            title={item.title}
          />
        )}
        style={styles.list}
      />
    ) : (
      //this.state.isProgressBarVisible ? (
      /*<ProgressCircleSnail
        color={"rgba(30, 144, 255, 1)"}
        size={75}
        style={{ alignSelf: "center" }}
        thickness={4}
      />*/
      <ActivityIndicator
        size={55}
        color="rgba(30, 144, 255, 1)"
        style={{ alignSelf: "center" }}
      />
    );
    //) : null;
    return <View style={styles.page}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  list: {
    flex: 1
  },
  page: {
    backgroundColor: "rgba(30, 144, 255, 0.08)",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  /*************************************************************************
   * get a brief text from the full text to present it in the product list *
   *************************************************************************/
  let data = state.products;
  data.forEach(element => {
    let end = element.text.indexOf(".");
    if (end === -1) {
      end = element.text.length;
    }
    element.text = element.text.substring(0, end);
  });

  return {
    isProductListLoaded: state.isProductListLoaded,
    products: data
  };
};

const mapDispatchToProps = {
  fetchProducts,
  openProductInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
