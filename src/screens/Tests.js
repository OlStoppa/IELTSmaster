import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import testData from '../fixtures/testData';
import TestButton from '../components/UI/TestButton';

class TestsScreen extends React.Component {
  render() {
    const answeredQuestions = index => {
      const part1 = this.props.answers.part1[index].filter(entry => entry !== 0);
      const part2 = this.props.answers.part2[index].filter(entry => entry !== 0);
      const part3 = this.props.answers.part3[index].filter(entry => entry !== 0);
      return part1.length + part2.length + part3.length;
    };

    const buttons = testData.map((test, index) => {
      const progress = answeredQuestions(index);
      console.log(progress);
      return (
        <TestButton
          key={index}
          onSelectTest={() =>
            this.props.navigation.navigate('TestParts', {
              test: index,
              title: `Test ${index + 1}`,
            })
          }
          answers={progress}
          index={index}
        >
          Test
        </TestButton>
      );
    });
    return (
      <ScrollView>
        <View style={styles.container}>{buttons}</View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers,
  };
};

export default connect(mapStateToProps)(TestsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 30,
  },
});
