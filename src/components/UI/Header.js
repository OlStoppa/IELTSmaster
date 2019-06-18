import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainText from './MainText';

const Header = props => (
  <View style={[styles.container, props.style]}>
    <MainText style={[styles.text, props.textStyle]}>{props.children}</MainText>
  </View>
);

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
