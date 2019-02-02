/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator, 
  createBottomTabNavigator, 
  createMaterialTopTabNavigator
} from 'react-navigation';
import AuthScreen from './src/screens/Auth';
import HomeScreen from './src/screens/Home';
import LessonsScreen from './src/screens/Lessons';
import AuthLoadingScreen from './src/screens/AuthLoading';
import TestsScreen from './src/screens/Tests';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeTabNavigator = createMaterialTopTabNavigator({
  Dashboard: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={24}/>)
     
    }
  },
  Tests: {
    screen: TestsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-play" size={24}/>)
     
    }
  },
  Lessons: {
    screen: LessonsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="ios-school" size={24}/>)
     
    }

  }
},{
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: "#c4dfe6",
      
      
    }
  },
  
  tabBarPosition: "bottom",
 navigationOptions:({navigation})=>{
   const {routeName} = navigation.state.routes[navigation.state.index];
   return {
     headerTitle: routeName,
     headerStyle:{
       backgroundColor: "#07575B",
       
     },
     headerTitleStyle: {
       color: "white"
     }
   };
 }
 

});

const MainNavigator = createStackNavigator({
  Home:  {screen: HomeTabNavigator}
  
  
}

);

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

