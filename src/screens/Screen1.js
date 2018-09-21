import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen2',
      title: 'Новость....',
    });
  };

  render() {
    return (
      <Container
        backgroundColor="#F44336"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen;
