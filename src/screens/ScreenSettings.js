import React, { Component } from 'react';
import Container from '../components/Container';
import CurrencySetting from '../components/CurrencySetting/CurrencySetting';

class Screen extends Component {
  render() {
    return (
      <Container
        backgroundColor="#067a46"
        onPress={this.handlePress}
      >
        <CurrencySetting />
      </Container>
    );
  }
}

export default Screen;
