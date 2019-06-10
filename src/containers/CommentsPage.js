/**
 * This container (can be called a screen or page) presents comments about the selected product.
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";

import { ADD_COMMENT } from "../images/images";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import { changeCommentInputVisibility } from "../actionCreators/SyncActions";
import { fetchProductComments } from "../actionCreators/AsyncActions";
import { postComment } from "../actionCreators/AsyncActions";

type Props = {
  changeCommentInputVisibility: Function,
  comments: Array<Object>,
  isCommentInputVisible: boolean,
  isLogged: boolean,
  postComment: Function,
  productId: number
};
type States = { isCommentInputVisible: boolean };
class CommentsPage extends Component<Props, States> {
  state = {
    isCommentInputVisible: false
  };

  changeModalVisibility(value) {
    this.setState({ isCommentInputVisible: value });
  }

  render() {
    const { comments } = this.props;
    return (
      <View style={styles.page}>
        <FlatList
          data={comments}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Comment
              dateTime={item.created_at}
              name={item.created_by.username}
              rating={item.rate}
              text={item.text}
            />
          )}
          style={styles.list}
        />
        <TouchableHighlight
          onPress={() => {
            if (this.props.isLogged) {
              this.changeModalVisibility(true);
              this.props.changeCommentInputVisibility(true);
            } else Alert.alert("Only logged in users can add comments.");
          }}
          style={styles.addButtonBlock}
        >
          <Image source={ADD_COMMENT} style={styles.addButton} />
        </TouchableHighlight>
        <Modal
          isVisible={
            this.props.isCommentInputVisible ===
            this.state.isCommentInputVisible
              ? this.props.isCommentInputVisible
              : false
          }
        >
          <CommentInput
            onClosePress={() => {
              this.changeModalVisibility(false);
              this.props.changeCommentInputVisibility(false);
            }}
            onSend={(comment, rating) =>
              this.props.postComment(comment, this.props.productId, rating)
            }
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  addButtonBlock: {
    borderColor: "#F1C408",
    borderRadius: 49,
    borderWidth: 5,
    bottom: 30,
    elevation: 8,
    right: 20,
    position: "absolute"
  },
  list: {
    flex: 1
  },
  page: {
    backgroundColor: "rgba(30, 144, 255, 0.08)",
    flex: 1
  },

  /******************
   * element styles *
   ******************/
  addButton: {
    height: 75,
    width: 75
  }
});

const mapStateToProps = state => {
  const data = state.comments[`product_${state.selectedProduct}`];
  return {
    comments: data,
    isCommentInputVisible: state.isCommentInputVisible,
    isLogged: state.isLogged,
    productId: state.selectedProduct
  };
};

const mapDispatchToProps = {
  changeCommentInputVisibility,
  fetchProductComments,
  postComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);
