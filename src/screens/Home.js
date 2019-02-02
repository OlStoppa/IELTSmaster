import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Header from '../components/UI/Header';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
   static navigationOptions = {
       header: null
   }
    render(){
        const name = this.props.navigation.state.params.name;
    return (
    <View>
        <Header>Hi {name}!</Header>
    </View>
    );
    }
};

export default HomeScreen;