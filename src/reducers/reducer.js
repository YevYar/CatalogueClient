/**
 * This module contains a reducer.
 *
 * @format
 * @flow
 */

import {
  LOGIN_SUCCESS,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  OPEN_PRODUCT_INFO,
  POST_COMMENT_SUCCESS,
  REGISTER_SUCCESS
} from "../actionCreators/types";

const imgUrl = "http://smktesting.herokuapp.com/static/";

export default function reducer(
  state = {
    comments: {},
    isLogged: false,
    products: [],
    selectedProduct: -1,
    token: "",
    username: ""
  },
  action
) {
  //console.log(state);
  let comments;
  let data;

  switch (action.type) {
    case LOGIN_SUCCESS:
      return state;

    case FETCH_PRODUCT_COMMENTS_SUCCESS:
      data = action.comments;
      data = data.sort((a, b) => {
        let aD = new Date(a.created_at),
          bD = new Date(b.created_at);
        return aD > bD ? -1 : bD > aD ? 1 : 0;
      });
      comments = state.comments;
      comments[`product_${action.id}`] = data;
      return { ...state, comments: comments };

    case FETCH_PRODUCTS_SUCCESS:
      data = action.products;
      data.forEach(element => {
        element.img = imgUrl + element.img;
      });
      return { ...state, products: data };

    case OPEN_PRODUCT_INFO:
      return { ...state, selectedProduct: action.id };

    case POST_COMMENT_SUCCESS:
      return state;

    case REGISTER_SUCCESS:
      return { ...state, isLogged: true, token: action.answer.token };

    default:
      return state;
  }
}
