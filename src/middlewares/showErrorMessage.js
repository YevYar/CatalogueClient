/**
 * This module contains the error displaying function.
 *
 * @format
 * @flow
 */

import { Alert } from "react-native";

export default function showErrorMessage(message: string) {
  Alert.alert(message);
}
