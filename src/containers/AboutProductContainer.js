/**
 * This container contains all the functions and data to dispatch them to the AboutProductScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import AboutProductScreen from "../components/screens/AboutProductScreen";
import { fetchProductComments } from "../middlewares/commentMiddleware";

const mapStateToProps = (state, ownProps) => {
  const data = state.catalogueState.domainData.products.find(
    x => x.id === state.catalogueState.appState.selectedProduct
  );
  return {
    goTo: () => ownProps.navigation.navigate("Comments"),
    id: state.catalogueState.appState.selectedProduct,
    product: data //not { ...data }, because data doesn't mutate in the presentation component
  };
};

const mapDispatchToProps = { fetchProductComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutProductScreen);
