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
import { fetchProductComments } from "../actionCreators/AsyncActions";

type Props = { productId: number };
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
          /*data={[
            {
              dateTime: "2013-12-19T17:51:16.557Z",
              id: 1,
              name: "Name1",
              rating: 4,
              text: "good"
            },
            {
              dateTime: "2013-12-19T00:00:00Z",
              id: 2,
              name: "Name2",
              rating: 5,
              text: "great"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 3,
              name: "Name3",
              rating: 5,
              text: "great"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 4,
              name: "Name4",
              rating: 3,
              text: "okay"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 5,
              name: "Name5",
              rating: 4,
              text: "good"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 6,
              name: "Name6",
              rating: 2,
              text: "bad"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 7,
              name: "Name7",
              rating: 1,
              text: "terrible"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 8,
              name: "Name8",
              rating: 4,
              text: "good"
            },
            {
              dateTime: "2013-12-19T07:51:16.557Z",
              id: 9,
              name: "Name9",
              rating: 4,
              text: "good"
            }
          ]}*/
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
          onPress={() => this.changeModalVisibility(true)}
          style={styles.addButtonBlock}
        >
          <Image source={ADD_COMMENT} style={styles.addButton} />
        </TouchableHighlight>
        <Modal isVisible={this.state.isCommentInputVisible}>
          <CommentInput
            onClosePress={() => this.changeModalVisibility(false)}
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
  let data = state.comments[`product_${state.selectedProduct}`];
  return {
    comments: data,
    productId: state.selectedProduct
  };
};

const mapDispatchToProps = {
  fetchProductComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);
