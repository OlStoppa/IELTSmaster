import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation';
import MainText from '../components/UI/MainText';
import Header from '../components/UI/Header';

class SectionTwoReady extends React.Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }
  render() {
    const {testNumber} = this.props.navigation.state.params;
    return (
      <View>
        <View style={{ width: '100%', alignSelf: 'flex-start' }}>
          <Header>Part 2</Header>
        </View>
        <View style={styles.container}>
          <MainText style={{ textAlign: 'center', fontSize: 20 }}>
            You will have 60 seconds to plan your answer to the question card.
          </MainText>
          <MainText style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>
            You may make notes.
          </MainText>

          <Button
            title="Ready"
            onPress={() => {
              this.props.navigation.navigate('PartTwo', { testNumber, part: 2 });
            }}
          />
        </View>
      </View>
    );
  }
}

export default SectionTwoReady;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
