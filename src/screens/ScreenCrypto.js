import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import { ListCrypto } from '../components/ListCrypto';

class ScreenCrypto extends Component {
  handlePress = (title) => {
    const { navigator } = this.props;
    navigator.push({
      screen: 'ScreenItemCrypto',
      passProps: { chartName: title },
      title,
    });
  };

  render() {
    return (
      <Container>
        <ListCrypto handlePress={this.handlePress} />
      </Container>
    );
  }
}

ScreenCrypto.propTypes = {
  navigator: PropTypes.any,
};

export default ScreenCrypto;
