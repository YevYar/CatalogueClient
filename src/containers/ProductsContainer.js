/**
 * This container contains all the functions and data to dispatch them to the ProductsScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import ProductsScreen from "../components/screens/ProductsScreen";
import { fetchProducts } from "../middlewares/catalogueMiddleware";
import { openProductInfo } from "../actionCreators/catalogueActions";

const mapStateToProps = (state, ownProps) => {
  return {
    goTo: () => ownProps.navigation.navigate("About"),
    isProductsLoadingFinished:
      state.catalogueState.appState.isProductsLoadingFinished,
    // products don't mutate in the presentation component, so I can get they by reference
    products: state.catalogueState.domainData.products
  };
};

const mapDispatchToProps = {
  fetchProducts,
  openProductInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsScreen);
