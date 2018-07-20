import React, { Component } from "react";
import { Container, Content } from "native-base";
import Footers from "./Footers";

class Product extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footers />
      </Container>
    );
  }
}

export default Product;
