/**
 * This container (can be called a screen or page) presents product list.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import ProductRow from "../components/ProductRow";
import { fetchProducts } from "../middlewares/CatalogueMiddleware";
import { mainDark, screenBackground } from "../constants/colors";
import { openProductInfo } from "../actionCreators/CatalogueActions";

type Props = {
  fetchProducts: Function,
  isProductsLoadingFinished: boolean,
  navigation: Object,
  openProductInfo: Function,
  products: Array<Object>
};
type States = {};
class ProductsPage extends Component<Props, States> {
  render() {
    const { products } = this.props;
    const content = this.props.isProductsLoadingFinished ? (
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
            text={item.brief}
            title={item.title}
          />
        )}
        style={styles.list}
      />
    ) : (
      <ActivityIndicator
        size={55}
        color={mainDark}
        style={styles.activityIndicator}
      />
    );
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
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },

  /******************
   * element styles *
   ******************/
  activityIndicator: {
    alignSelf: "center"
  }
});

const mapStateToProps = state => {
  return {
    isProductsLoadingFinished: state.appState.isProductsLoadingFinished,
    // products don't mutate in the presentation component, so I can get they by reference
    products: state.domainData.products
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
