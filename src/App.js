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
import ProductsPage from "./containers/ProductsPage";
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
    Login: { screen: Login, navigationOptions: { title: "Login" } }
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
//export default createAppContainer(MainNavigator);
//export default function App() {
//  return <Provider store={store}>{app}</Provider>;
//}

type Props = {};
type States = {};
export default class App extends Component<Props, States> {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

//type Props = {};
//type States = {};
/*export default class App extends Component<Props, States> {
  render() {
    return (
      // <View style={styles.container}>
      //   <ProductRow />
      //   <ProductRow />
      // </View>
      //<AboutProductPage />
      //<CommentsPage />
      //<Login />
    );
  }
}*/

/* spell-checker: disable */
/*const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center"
  }
});*/
