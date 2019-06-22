/**
 * This container contains all the functions and data to dispatch them to the ProductsScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import ProductsScreen from "../components/screens/ProductsScreen";
import { fetchProducts } from "../middlewares/CatalogueMiddleware";
import { openProductInfo } from "../actionCreators/CatalogueActions";

const mapStateToProps = (state, ownProps) => {
  return {
    goTo: () => ownProps.navigation.navigate("About"),
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
)(ProductsScreen);
