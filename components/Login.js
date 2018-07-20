import React, { Component } from "react";
import { View } from "react-native";
import Logo from "./Logo";

import { Container, Content, Item, Input, Button, Text } from "native-base";

class Login extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "powderblue"
          }}
        >
          <Logo />
        </View>
        <View style={{ flex: 3 }}>
          <Container>
            <Content>
              <Item regular>
                <Input placeholder="email" />
              </Item>
              <Item regular>
                <Input placeholder="password" />
              </Item>
              <Button success>
                <Text> Success </Text>
              </Button>
            </Content>
          </Container>
        </View>
      </View>
    );
  }
}

export default Login;
