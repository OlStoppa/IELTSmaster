import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { setInit } from '../store/actions/answers';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const data = await AsyncStorage.getItem('userToken');

    if (data !== null) {
      const userToken = JSON.parse(data);
      this.props.navigation.navigate('Dashboard', { name: userToken.name });
      this.props.onSetInit(userToken.answers, userToken.name, userToken.id);
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
const mapDispatchToProps = dispatch => {
  return {
    onSetInit: (answers, name, id) => dispatch(setInit(answers, name, id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthLoadingScreen);
