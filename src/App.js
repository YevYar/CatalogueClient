/**
 * Catalogue client
 * https://github.com/EugeneYarem/CatalogueClient
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AboutProductPage from "./containers/AboutProductPage";
import AccountButton from "./components/AccountButton";
import CommentsPage from "./containers/CommentsPage";
import Login from "./components/Login";
import NavigationService from "./NavigationService";
import ProductsPage from "./containers/ProductsPage";
import Registration from "./components/Registration";
import { fetchProducts } from "./actionCreators/AsyncActions";
import reducer from "./reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());

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

type Props = {};
type States = {};
export default class App extends Component<Props, States> {
  render() {
    return (
      <Provider store={store}>
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
