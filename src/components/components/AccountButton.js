/**
 * This component presents the account button in the header.
 *
 * @format
 * @flow
 */

import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers
} from "react-native-popup-menu";

import { ACCOUNT } from "../../constants/images";
import {
  accountMenuColor,
  additionalTextColor,
  mainLight,
  navHeaderElementsColor
} from "../../constants/colors";

const { Popover } = renderers;

type Props = {
  isLogged: boolean,
  logout: Function,
  onPress: Function,
  username: string
};
export default function AccountButton(props: Props) {
  const element = props.isLogged ? (
    <Menu
      renderer={Popover}
      rendererProps={{
        anchorStyle: { backgroundColor: accountMenuColor },
        placement: "left",
        preferredPlacement: "left"
      }}
      style={styles.container}
    >
      <MenuTrigger>
        <Text style={styles.text}>
          Hello,{"\n"}
          <Text style={styles.name}>{props.username}</Text>
        </Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => props.logout()}>
          <Text style={styles.logout}>Logout</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  ) : (
    <TouchableHighlight
      onPress={() => props.onPress()}
      style={styles.container}
      underlayColor={mainLight}
    >
      <Image source={ACCOUNT} style={styles.image} />
    </TouchableHighlight>
  );

  return element;
}

const styles = StyleSheet.create({
  /********************
   * container styles *
   ********************/
  container: {
    backgroundColor: navHeaderElementsColor,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    height: 56,
    minWidth: 54,
    padding: 4,
    paddingLeft: 5,
    paddingRight: 3
  },

  /******************
   * element styles *
   ******************/
  image: {
    height: 48,
    width: 48
  },
  logout: {
    color: accountMenuColor,
    fontSize: 16.5,
    width: 100
  },
  name: {
    textAlign: "center",
    textDecorationLine: "underline"
  },
  text: {
    color: additionalTextColor,
    fontSize: 15.5,
    height: 48,
    textAlign: "center"
  }
});
