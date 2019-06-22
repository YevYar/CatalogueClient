/**
 * This container contains all the functions and data to dispatch them to the AccountButton.
 *
 * @format
 * @flow
 */

import { connect } from "react-redux";

import AccountButton from "../components/components/AccountButton";
import { logout } from "../middlewares/SessionStoreMiddleware/AccountStoreMiddleware";

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.appState.isLogged,
    onPress: ownProps.onPress,
    username: state.domainData.username
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountButton);
