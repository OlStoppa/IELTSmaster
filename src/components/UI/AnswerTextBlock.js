import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnswerTextBlock = props => (
  <View style={styles.block}>
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  block: {
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AnswerTextBlock;
