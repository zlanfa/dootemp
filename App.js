import React from "react";
import Product from "./components/Product";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./components/Login";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="product"
            component={Product}
            title="Product"
            hideNavBar={true}
          />
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={true}
            initial={true}
          />
        </Stack>
      </Router>
    );
  }
}
