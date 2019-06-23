/**
 * This screen (or page) presents comments about the selected product.
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

import { ADD_COMMENT } from "../../constants/images";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ScreenActivityIndicator from "../components/ScreenActivityIndicator";
import { mainLight, screenBackground } from "../../constants/colors";

type Props = {
  changeCommentInputVisibility: Function,
  comments: Array<Object>,
  isCommentInputVisible: boolean,
  isCommentsLoadedWithoutErrors: boolean,
  isCommentsLoadingFinished: boolean,
  isLogged: boolean,
  postComment: Function,
  productId: number
};
type States = { isCommentInputVisible: boolean };

export default class CommentsScreen extends Component<Props, States> {
  state = {
    isCommentInputVisible: false
  };

  changeModalVisibility(value: boolean) {
    this.setState({ isCommentInputVisible: value });
  }

  render() {
    const { comments } = this.props;
    if (this.props.isCommentsLoadingFinished) {
      const addButton = this.props.isCommentsLoadedWithoutErrors ? (
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
      ) : null;

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
          {addButton}
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
    } else {
      return (
        <View style={styles.page}>
          <ScreenActivityIndicator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  addButtonBlock: {
    borderColor: mainLight,
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
    backgroundColor: screenBackground,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },

  /******************
   * element styles *
   ******************/
  addButton: {
    height: 75,
    width: 75
  }
});
