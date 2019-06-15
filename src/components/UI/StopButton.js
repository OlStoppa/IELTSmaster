import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class StopButton extends React.Component {
  state = {
    flash: true,
  };

  componentDidMount() {
    this._flashInterval = setInterval(() => {
      this.toggleFlash();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this._flashInterval);
  }

  toggleFlash = () => {
    this.setState(state => {
      return {
        flash: !state.flash,
      };
    });
  };

  render() {
    return (
      <TouchableOpacity style={styles.recordButton} onPress={this.props.onStopRecord}>
        <View style={styles.recordButton}>
          <Icon name="md-square" size={60} color={this.state.flash ? 'red' : 'gray'} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default StopButton;

const styles = StyleSheet.create({
  recordButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'red',
  },
});
