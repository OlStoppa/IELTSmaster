/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator, 
  createMaterialTopTabNavigator
} from 'react-navigation';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import AuthScreen from './src/screens/Auth';
import HomeScreen from './src/screens/Home';
import LessonsScreen from './src/screens/Lessons';
import AuthLoadingScreen from './src/screens/AuthLoading';
import TestsScreen from './src/screens/Tests';
import Swiper from './src/components/UI/Swiper';
import PartTwoReady from './src/screens/SectionTwoReady';
import PartTwo from './src/screens/PartTwo';
import TestParts from './src/screens/TestParts';
import Examples from './src/screens/Examples';




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

  },
  Examples: {
    screen: Examples,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name="md-book" size={24}/>)
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
  
  // tabBarPosition: "bottom",
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
  Home:  {
    screen: HomeTabNavigator,
   
  },
  Test: {
    screen: Swiper,
    
  },
  PartTwoReady: {screen: PartTwoReady},
  PartTwo: {screen: PartTwo},
  TestParts: {
    screen: TestParts
  }
   
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

class App extends React.Component {

  _storeData = async (data) => {
    try {
        await AsyncStorage.setItem('userToken', data);
    } catch (error) {
        console.log('error');
    }
}
  
 componentWillUnmount() {
   
  const token = {
    id: this.props.id,
    name: this.props.name,
    answers: this.props.answers
  }
  const data = JSON.stringify(token);
  this._storeData(data);
 }
  
  render() {
    return <AppContainer />;
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers,
    name: state.answers.name,
    id: state.answers.id
  };
};

export default connect(mapStateToProps)(App);

