/**
 * This module contains actions related to comments.
 *
 * @format
 * @flow
 */

import {
  CHANGE_COMMENT_INPUT_VISIBILITY,
  FETCH_PRODUCT_COMMENTS_FAIL,
  FETCH_PRODUCT_COMMENTS_SUCCESS,
  POST_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  SET_COMMENTS_NOT_LOADED
} from "./types";

export function changeCommentInputVisibility(isVisible: boolean) {
  return { type: CHANGE_COMMENT_INPUT_VISIBILITY, isVisible };
}

export function fetchProductCommentsFail() {
  return { type: FETCH_PRODUCT_COMMENTS_FAIL };
}

export function fetchProductCommentsSuccess(
  id: number,
  comments: Array<Object>
) {
  return {
    type: FETCH_PRODUCT_COMMENTS_SUCCESS,
    id,
    comments
  };
}

export function postCommentFail() {
  return { type: POST_COMMENT_FAIL };
}

export function postCommentSuccess(newComment: Object) {
  return { type: POST_COMMENT_SUCCESS, newComment };
}

export function setCommentsLoadedToFalse() {
  return { type: SET_COMMENTS_NOT_LOADED };
}
