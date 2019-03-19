import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CategoryBox = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.box, props.boxStyle]}>
      {props.partNum ? (
        <Text style={{ fontSize: 30, color: 'white' }}>{props.partNum}</Text>
      ) : (
        <Icon name="ios-bulb" size={50} color="white" />
      )}
    </View>
    <Text style={styles.label}>{props.children}</Text>
  </TouchableOpacity>
);

export default CategoryBox;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 75,
    backgroundColor: '#f442cb',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 25,
  },
  label: {
    fontSize: 24,
    textAlign: 'center',
  },
});
