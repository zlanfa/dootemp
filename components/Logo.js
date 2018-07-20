import React, { Component } from "react";
import { View, Image } from "react-native";

class Logo extends Component {
  render() {
    return (
      <Image
        source={require("./../assets/logo.png")}
        style={{ width: 350, height: 100 }}
      />
    );
  }
}

export default Logo;
