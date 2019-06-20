import React from 'react';
import { View, StyleSheet, Button, ImageBackground, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DefaultInput from '../components/UI/DefaultInput';
import MainText from '../components/UI/MainText';
import { setInit } from '../store/actions/answers';
import london from '../assets/london.jpg';

const uuid = require('uuid/v4');

class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
    value: '',
  };

  textChangeHandler = val => {
    this.setState({
      value: val,
    });
  };

  handleSubmit = () => {
    const token = {
      name: this.state.value,
      id: uuid(),
      answers: {
        part1: new Array(4).fill(new Array(8).fill(0)),
        part2: new Array(4).fill(new Array(1).fill(0)),
        part3: new Array(4).fill(new Array(3).fill(0)),
      },
    };
    this.props.onSetInit(token.answers, token.name, token.id);
    const data = JSON.stringify(token);
    this._storeData(data);

    this.props.navigation.navigate('Dashboard', { name: this.state.value });
  };

  _storeData = async data => {
    try {
      await AsyncStorage.setItem('userToken', data);
    } catch (error) {
      console.log('error');
    }
  };

  render() {
    return (
      <ImageBackground
        source={london}
        style={{
          width: '100%',
          flex: 1,
          position: 'absolute',
          height: '100%',
        }}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <MainText textStyle={{ fontSize: 24 }}>Choose a Username</MainText>
            <DefaultInput placeholder="username" onChangeText={this.textChangeHandler} />
            <Button title="Login" onPress={this.handleSubmit} disabled={!this.state.value} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSetInit: (answers, name, id) => dispatch(setInit(answers, name, id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    height: '50%',
    justifyContent: 'space-evenly',
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    opacity: 0.9,
  },
});

AuthScreen.propTypes = {
  onSetInit: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
