/**
 * This module contains middleware that executes all functions related to the product catalogue.
 *
 * @format
 * @flow
 */

import ServerApiService from "../services/ServerApiService";
import {
  fetchProductsFail,
  fetchProductsSuccess
} from "../actionCreators/CatalogueActions";
import showErrorMessage from "./showErrorMessage";

const FETCH_CATALOGUE_FAIL_MESSAGE =
  "Something has gone wrong. We can't get the product list.";

const apiClient = ServerApiService.getApiService();
const imgUrl = "http://smktesting.herokuapp.com/static/";

export function fetchProducts() {
  return (dispatch: Function) => {
    return apiClient
      .get("products/")
      .then(response => {
        console.log("fetchProducts");
        response.data.forEach(element => {
          /*****************************
           * get full path to an image *
           *****************************/
          element.img = imgUrl + element.img;

          /******************************************************************************************
           * get a brief text (first sentence) from the full text to present it in the product list *
           ******************************************************************************************/
          let end = element.text.indexOf(".");
          if (end === -1) {
            end = element.text.length;
          }
          element.brief = element.text.substring(0, end);
        });
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        console.log("fetchProducts: " + error);
        showErrorMessage(FETCH_CATALOGUE_FAIL_MESSAGE);
        dispatch(fetchProductsFail());
        //throw error;
      });
  };
}
