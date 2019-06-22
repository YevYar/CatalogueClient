/**
 * This container contains all the functions and data to dispatch them to the CommentsScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import CommentsScreen from "../components/screens/CommentsScreen";
import { changeCommentInputVisibility } from "../actionCreators/CommentActions";
import { postComment } from "../middlewares/CommentMiddleware";

const mapStateToProps = state => {
  return {
    comments:
      // comments don't mutate in the presentation component, so I can get they by reference
      state.domainData.comments[`product_${state.appState.selectedProduct}`],
    isCommentInputVisible: state.uiState.isCommentInputVisible,
    isCommentsLoadedWithoutErrors: state.appState.isCommentsLoadedWithoutErrors,
    isCommentsLoadingFinished: state.appState.isCommentsLoadingFinished,
    isLogged: state.appState.isLogged,
    productId: state.appState.selectedProduct
  };
};

const mapDispatchToProps = {
  changeCommentInputVisibility,
  postComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsScreen);
