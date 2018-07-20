import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="cart" />
            <Text>สินค้า</Text>
          </Button>
          <Button vertical>
            <Icon name="chatboxes" />
            <Text>พูดคุย</Text>
          </Button>
          <Button vertical>
            <Icon name="bookmarks" />
            <Text>ขาย</Text>
          </Button>
          <Button vertical>
            <Icon name="keypad" />
            <Text>ตั้งค่า</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default Footers;
