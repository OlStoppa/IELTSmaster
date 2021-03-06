import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LessonBox = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ flexDirection: 'row' }}>
      <View style={[styles.box, props.style]}>
        <Icon name={props.icon} size={50} color="white" />
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

export default LessonBox;

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
    fontSize: 18,
    fontWeight: '400',
  },
});
