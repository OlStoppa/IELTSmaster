import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ExamplesTestSelector = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ flexDirection: 'row' }}>
      <View style={[styles.box, props.style]}>
        <Text style={styles.number}>{props.testNumber}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderBottomWidth: 2,
          borderColor: 'black',
        }}
      >
        <Text style={styles.label}>{props.name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ExamplesTestSelector;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '400',
  },
  number: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
  },
});
