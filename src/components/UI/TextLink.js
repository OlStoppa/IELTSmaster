import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextLink = props => (
  <Text onPress={props.onPress} style={styles.text}>
    {props.children}
  </Text>
);

export default TextLink;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'purple',
    textDecorationStyle: 'solid',
  },
});
