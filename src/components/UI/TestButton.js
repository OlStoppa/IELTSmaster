import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TestButton = props => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={props.onSelectTest}>
      <View
        style={[
          styles.testButton,
          props.answers > 0 ? styles.alt : null,
          props.answers === 12 ? styles.finished : null,
        ]}
      >
        <View style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
          <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'white' }}>{props.children}</Text>
          </View>
          <View style={{ alignSelf: 'flex-end', width: '40%' }}>
            <Text style={{ fontSize: 100, color: 'white' }}>{props.index + 1}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{ textAlign: 'left' }}>{props.answers}/12</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TestButton;

const styles = StyleSheet.create({
  testButton: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#66a5ad',
    margin: 5,
  },
  touchable: {
    height: 150,
    marginTop: 10,
    width: '45%',
  },
  footer: {
    height: '20%',
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  alt: { borderColor: 'red' },
  finished: {
    borderColor: 'blue',
  },
});
