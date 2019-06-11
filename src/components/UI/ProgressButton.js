import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProgressButton = props => {
  if (props.disabled) {
    return (
      <View style={[styles.progressButton, props.disabled ? styles.disabled : null]}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.progressButton, props.disabled ? styles.disabled : null]}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProgressButton;

const styles = StyleSheet.create({
  progressButton: {
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3470d1',
    padding: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
  },
  disabled: {
    backgroundColor: '#eee',
    color: '#aaa',
    borderColor: '#aaa',
  },
});
