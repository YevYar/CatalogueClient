/**
 * Catalogue client
 * https://github.com/EugeneYarem/CatalogueClient
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { MenuProvider } from "react-native-popup-menu";
import { Provider, connect } from "react-redux";

import MainNavigator from "./navigation/MainNavigator";
import NavigationService from "./services/NavigationService";
import { fetchProducts } from "./middlewares/catalogueMiddleware";
import { restoreSession } from "./middlewares/SessionStoreMiddleware/restoreSessionMiddleware";
import store from "./store";

const Navigation = createAppContainer(MainNavigator);

type Props = { fetchProducts: Function, restoreSession: Function };
type States = {};
class App extends Component<Props, States> {
  componentDidMount() {
    this.props.restoreSession();
    this.props.fetchProducts();
    //setTimeout(() => this.props.fetchProducts(), 5000);
  }

  render() {
    return (
      <MenuProvider>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </MenuProvider>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { fetchProducts, restoreSession };

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Root = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default Root;
