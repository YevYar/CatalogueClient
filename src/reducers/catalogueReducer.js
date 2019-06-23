/**
 * This module contains the reducer that updates the store
 * in the result of the actions related to the product list.
 *
 * @format
 * @flow
 */

import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO
} from "../actionCreators/types";

export default function catalogueReducer(state: Object, action: Object) {
  console.log("\n\n");
  console.log("====================== STATE in CATALOGUE_REDUCER");
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        appState: {
          ...state.appState,
          isProductsLoadingFinished: true
        }
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        appState: {
          ...state.appState,
          isProductsLoadingFinished: true
        },
        domainData: { ...state.domainData, products: action.products }
      };

    case OPEN_PRODUCT_INFO:
      return {
        ...state,
        appState: {
          ...state.appState,
          selectedProduct: action.id
        }
      };

    default:
      return state;
  }
}
