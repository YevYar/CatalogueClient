/**
 * This container contains all the functions and data to dispatch them to the AccountButton.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import AccountButton from "../components/components/AccountButton";
import { logout } from "../middlewares/UserAccountMiddleware/logoutMiddleware";

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.userState.appState.isLogged,
    onPress: ownProps.onPress,
    username: state.userState.domainData.username
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButton);
