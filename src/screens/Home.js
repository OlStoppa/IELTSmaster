import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = (props) => {
    const name = props.navigation.getParam('name');
    return (
    <View>
        <Text>Home Screen{name}</Text>
    </View>
    );
};

export default HomeScreen;