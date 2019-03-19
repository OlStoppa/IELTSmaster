import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import testData from '../fixtures/testData';
import ExampleTestSelector from '../components/UI/ExamplesTestSelector';

const Examples = props => {
  const content = testData.map((test, index) => {
    return (
      <ExampleTestSelector
        key={index}
        name={`Test ${index + 1} Answers`}
        style={{ backgroundColor: '#abc' }}
        testNumber={index + 1}
        onPress={() => props.navigation.navigate('ExampleTestParts', { testNum: index })}
      />
    );
  });
  return (
    <ScrollView>
      <View style={styles.container}>{content}</View>
    </ScrollView>
  );
};

export default Examples;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
