import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CategoryBox from '../components/UI/CategoryBox';

class ExampleTestParts extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Test ${navigation.state.params.testNum + 1} Answers`,
  });

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.handleView);
  }

  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
  };

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleView);
  }

  handleView = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape',
    });
  };

  render() {
    const { testNum } = this.props.navigation.state.params;
    return (
      <View
        style={
          this.state.viewMode === 'portrait' ? styles.containerPortrait : styles.containerLandscape
        }
      >
        <View>
          <CategoryBox
            partNum={1}
            onPress={() => this.props.navigation.navigate('AnswersScreen', { testNum, part: 1 })}
          >
            Part 1
          </CategoryBox>
        </View>
        <View>
          <CategoryBox
            partNum={2}
            onPress={() => this.props.navigation.navigate('AnswersScreen', { testNum, part: 2 })}
          >
            Part 2
          </CategoryBox>
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

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 30,
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default ExampleTestParts;
