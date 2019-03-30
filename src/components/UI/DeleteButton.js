import React from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.addAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.View style={{ transform: [{ scale: this.state.addAnim }] }}>
        <TouchableOpacity style={styles.deleteButton} onPress={this.props.onDeleteAnswer}>
          <View style={styles.deleteButton}>
            <Icon name="ios-trash" size={30} color="grey" />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default DeleteButton;

const styles = StyleSheet.create({
  deleteButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
