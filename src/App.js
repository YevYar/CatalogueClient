/**
 * Catalogue client
 * https://github.com/EugeneYarem/CatalogueClient
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { MenuProvider } from "react-native-popup-menu";
import { Provider, connect } from "react-redux";

import AboutProductPage from "./containers/AboutProductPage";
import AccountButton from "./components/AccountButton";
import CommentsPage from "./containers/CommentsPage";
import Login from "./containers/Login";
import NavigationService from "./NavigationService";
import ProductsPage from "./containers/ProductsPage";
import Registration from "./containers/Registration";
import { fetchProducts } from "./actionCreators/AsyncActions";
import { restoreSession } from "./actionCreators/AsyncActions";
import store from "./store";

//store.dispatch(restoreSession());
//store.dispatch(fetchProducts());

const MainNavigator = createStackNavigator(
  {
    Home: { screen: ProductsPage, navigationOptions: { title: "Products" } },
    About: {
      screen: AboutProductPage,
      navigationOptions: { title: "About product" }
    },
    Comments: {
      screen: CommentsPage,
      navigationOptions: { title: "Comments" }
    },
    Login: {
      screen: Login,
      navigationOptions: { headerRight: null, title: "Login" }
    },
    Registration: {
      screen: Registration,
      navigationOptions: { headerRight: null, title: "Registration" }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: (
        <AccountButton onPress={() => navigation.navigate("Login")} />
      ),
      headerStyle: {
        backgroundColor: "#1E90FF"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: "bold"
      }
    }),
    initialRouteName: "Home"
  }
);

const Navigation = createAppContainer(MainNavigator);

type Props = { fetchProducts: Function, restoreSession: Function };
type States = {};
class App extends Component<Props, States> {
  componentDidMount() {
    this.props.restoreSession();
    this.props.fetchProducts();
    //setTimeout(() => this.props.fetchProducts(), 12000);
  }

  render() {
    return (
      //<Provider store={store}>
      <MenuProvider>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </MenuProvider>
      //</Provider>
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
