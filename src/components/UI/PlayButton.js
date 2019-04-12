import React from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends React.Component {
  state = {
    addAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.spring(this.state.addAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      // <View style={styles.buttonContainer}>
      <Animated.View style={{ transform: [{ scale: this.state.addAnim }] }}>
        <TouchableOpacity style={styles.playButton} onPress={this.props.onQuestionPlay}>
          <View style={styles.playButton}>
            <Icon name="ios-play" size={80} color="green" />
          </View>
        </TouchableOpacity>
      </Animated.View>
      // </View>
    );
  }
}

export default PlayButton;

const styles = StyleSheet.create({
  playButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'green',
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4dfe6',
  },
});
