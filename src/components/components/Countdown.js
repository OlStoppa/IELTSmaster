import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Countdown extends React.Component {
  state = {
    count: 60,
  };

  componentDidMount() {
    this.startCountdown = setInterval(this.countdown, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.startCountdown);
  }

  countdown = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
    if (this.state.count === 0) {
      this.props.endCountdown();
    }
  };

  render() {
    return (
      <View>
        <Text style={[styles.text, this.props.textStyle]}>{this.state.count}</Text>
      </View>
    );
  }
}

export default Countdown;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'white',
  },
});
