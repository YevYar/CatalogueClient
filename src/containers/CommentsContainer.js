/**
 * This container contains all the functions and data to dispatch them to the CommentsScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import CommentsScreen from "../components/screens/CommentsScreen";
import { changeCommentInputVisibility } from "../actionCreators/commentActions";
import { postComment } from "../middlewares/commentMiddleware";

const mapStateToProps = state => {
  return {
    comments:
      // comments don't mutate in the presentation component, so I can get they by reference
      state.commentsState.domainData.comments[
        `product_${state.catalogueState.appState.selectedProduct}`
      ],
    isCommentInputVisible: state.commentsState.uiState.isCommentInputVisible,
    isCommentsLoadedWithoutErrors:
      state.commentsState.appState.isCommentsLoadedWithoutErrors,
    isCommentsLoadingFinished:
      state.commentsState.appState.isCommentsLoadingFinished,
    isLogged: state.userState.appState.isLogged,
    productId: state.catalogueState.appState.selectedProduct
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
