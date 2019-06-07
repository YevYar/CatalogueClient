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
  OPEN_PRODUCT_INFO,
  POST_COMMENT,
  REGISTER
} from "../actionCreators/types";

const imgUrl = "http://smktesting.herokuapp.com/static/";

export default function reducer(
  state = { comments: {}, products: [], selectedProduct: -1 },
  action
) {
  //console.log(state);
  let comments;
  let data;

  switch (action.type) {
    case LOGIN:
      return state;
    case FETCH_PRODUCT_COMMENTS:
      data = action.comments;
      data = data.sort((a, b) => {
        let aD = new Date(a.created_at),
          bD = new Date(b.created_at);
        return aD > bD ? -1 : bD > aD ? 1 : 0;
      });
      comments = state.comments;
      comments[`product_${action.id}`] = data;
      return { ...state, comments: comments };

    case FETCH_PRODUCTS:
      data = action.products;
      data.forEach(element => {
        element.img = imgUrl + element.img;
      });
      return { ...state, products: data };

    case OPEN_PRODUCT_INFO:
      return { ...state, selectedProduct: action.id };
    case POST_COMMENT:
      return state;
    case REGISTER:
      return state;
    default:
      return state;
  }
}
