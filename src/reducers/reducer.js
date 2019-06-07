/**
 * This module contains a reducer.
 *
 * @format
 * @flow
 */

import {
  LOGIN,
  FETCH_PRODUCT_COMMENTS,
  FETCH_PRODUCTS,
  POST_COMMENT,
  REGISTER
} from "../actionCreators/types";

const imgUrl = "http://smktesting.herokuapp.com/static/";

export default function reducer(state = { products: [] }, action) {
  let data;
  let temp;
  switch (action.type) {
    case LOGIN:
      return state;
    case FETCH_PRODUCT_COMMENTS:
      return state;
    case FETCH_PRODUCTS:
      data = action.products;
      data.forEach(element => {
        element.img = imgUrl + element.img;
      });

      return { ...state, products: data };
    case POST_COMMENT:
      return state;
    case REGISTER:
      return state;
    default:
      return state;
  }
}
