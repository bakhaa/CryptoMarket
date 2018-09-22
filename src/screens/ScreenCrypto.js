import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Text } from 'react-native';
import Container from '../components/Container';
import { ListCrypto } from '../components/ListCrypto';

class ScreenCrypto extends Component {
  handlePress = (item) => {
    const { navigator } = this.props;
    navigator.push({
      screen: 'ScreenItemCrypto',
      title: item.chartName,
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
