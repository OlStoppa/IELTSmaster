import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const data = await AsyncStorage.getItem('userToken');
   

    if (data !== null) {
      const userToken = JSON.parse(data);
      this.props.navigation.navigate('Dashboard',{name: userToken.name});
    }
    else {
      this.props.navigation.navigate( 'Login');
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
    alignItems: "center",
    backgroundColor: "blue"
  }
});

export default AuthLoadingScreen;