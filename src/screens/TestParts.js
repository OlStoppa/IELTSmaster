import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';
import SubmitTest from '../components/components/SubmitTest';

class TestParts extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,

    headerStyle: {
      backgroundColor: '#07575B',
    },
    headerTitleStyle: {
      color: 'white',
    },
  });

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.handleView);
  }

  state = {
    modal: false,
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
  };

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleView);
  }

  modalHandler = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal,
      };
    });
  };

  handleView = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape',
    });
  };

  render() {
    const { part1, part2, part3 } = this.props.answers;
    const testNumber = this.props.navigation.state.params.test;
    const partOnePercentComplete =
      (100 / 8) * part1[testNumber].filter(answer => answer !== 0).length;
    const partTwoPercentComplete = part2[testNumber][0] ? 100 : 0;
    const partThreePercentComplete =
      (100 / 3) * part3[testNumber].filter(answer => answer !== 0).length;
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={
            this.state.viewMode === 'portrait'
              ? styles.buttonContainerPortrait
              : styles.buttonContainerLandscape
          }
        >
          <View style={{ padding: 20 }}>
            <AnimatedCircularProgress
              size={120}
              width={3}
              fill={partOnePercentComplete}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            >
              {() => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Test', {
                      test: testNumber,
                      part: 1,
                    })
                  }
                >
                  <View style={styles.button}>
                    <View style={styles.buttonInner}>
                      <Text>Part</Text>
                    </View>
                    <View style={[styles.buttonInner]}>
                      <Text style={{ fontSize: 40 }}>1</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={{ padding: 20 }}>
            <AnimatedCircularProgress
              size={120}
              width={3}
              fill={partTwoPercentComplete}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            >
              {() => (
                <TouchableOpacity
                  onPress={
                    partTwoPercentComplete === 0
                      ? () =>
                          this.props.navigation.navigate('PartTwoReady', {
                            testNumber,
                            part: 2,
                          })
                      : () =>
                          this.props.navigation.navigate('PartTwo', {
                            testNumber,
                            part: 2,
                          })
                  }
                >
                  <View style={styles.button}>
                    <View style={styles.buttonInner}>
                      <Text>Part</Text>
                    </View>
                    <View style={[styles.buttonInner]}>
                      <Text style={{ fontSize: 40 }}>2</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={{ padding: 20 }}>
            <AnimatedCircularProgress
              size={120}
              width={3}
              fill={partThreePercentComplete}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
            >
              {() => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Test', {
                      test: testNumber,
                      part: 3,
                    })
                  }
                >
                  <View style={styles.button}>
                    <View style={styles.buttonInner}>
                      <Text>Part</Text>
                    </View>
                    <View style={[styles.buttonInner]}>
                      <Text style={{ fontSize: 40 }}>3</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
        {partOnePercentComplete + partTwoPercentComplete + partThreePercentComplete === 300 && (
          <Button title="Get My Band Score" onPress={this.modalHandler} />
        )}
        <View>
          <SubmitTest
            visible={this.state.modal}
            testNumber={testNumber}
            name={this.props.name}
            id={this.props.id}
            answers={this.props.answers}
            closeModal={this.modalHandler}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers,
    name: state.answers.name,
  };
};

export default connect(mapStateToProps)(TestParts);

const styles = StyleSheet.create({
  buttonContainerPortrait: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    height: '75%',
  },
  buttonContainerLandscape: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: '75%',
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: '#c4dfe6',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 40,
  },
  buttonInner: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
