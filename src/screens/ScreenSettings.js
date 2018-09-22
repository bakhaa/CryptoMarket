import React, { Component } from 'react';
// import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    // this.props.navigator.showModal({
    //   screen: 'Settings',
    //   title: 'Settings',
    // });
  };

  render() {
    return (
      <Container
        backgroundColor="#067a46"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen;
