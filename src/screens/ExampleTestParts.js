import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CategoryBox from '../components/UI/CategoryBox';

class ExampleTestParts extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Test ${navigation.state.params.testNum + 1} Answers`,
  });

  render() {
    const { testNum } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View>
          <CategoryBox
            partNum={1}
            onPress={() => this.props.navigation.navigate('AnswersScreen', { testNum, part: 1 })}
          >
            Part 1
          </CategoryBox>
        </View>
        <View>
          <CategoryBox partNum={2}>Part 2</CategoryBox>
        </View>
        <View>
          <CategoryBox
            partNum={3}
            onPress={() => this.props.navigation.navigate('AnswersScreen', { testNum, part: 3 })}
          >
            Part 3
          </CategoryBox>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default ExampleTestParts;
