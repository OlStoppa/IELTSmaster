import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainText from './MainText';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <MainText style={[styles.text, this.props.textStyle]}>{this.props.children}</MainText>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '50%',
    backgroundColor: '#07575B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
