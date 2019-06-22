/**
 * This screen (or page) presents the product list.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import ProductRow from "../components/ProductRow";
import { mainDark, screenBackground } from "../../constants/colors";

type Props = {
  fetchProducts: Function,
  goTo: Function,
  isProductsLoadingFinished: boolean,
  //navigation: Object,
  openProductInfo: Function,
  products: Array<Object>
};
type States = {};
export default class ProductsScreen extends Component<Props, States> {
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
              this.props.goTo();
              //this.props.navigation.navigate("About");
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
