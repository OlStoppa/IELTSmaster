/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthScreen from './src/screens/Auth';
import HomeScreen from './src/screens/Home';
import AuthLoadingScreen from './src/screens/AuthLoading';

const HomeTabNavigator = createBottomTabNavigator({
  HomeScreen,
  AuthScreen
},{
 navigationOptions:({navigation})=>{
   const {routeName} = navigation.state.routes[navigation.state.index];
   return {
     headerTitle: routeName
   };
 }

});

const MainNavigator = createStackNavigator({
  Home:  {screen: HomeTabNavigator}
  
});

const AppNavigator = createSwitchNavigator({
  AuthLoading: {screen: AuthLoadingScreen},
  Login: {
    screen: AuthScreen
  },
  Home: {screen: MainNavigator }
  
},{
  initialRouteName: 'AuthLoading'
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

