/**
 * This container contains all the functions and data to dispatch them to the LoginScreen.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import LoginScreen from "../components/screens/LoginScreen";
import { login } from "../middlewares/UserAccountMiddleware/authorizationMiddleware";

const mapStateToProps = (state, ownProps) => {
  return {
    goTo: () => ownProps.navigation.navigate("Registration")
  };
};

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
