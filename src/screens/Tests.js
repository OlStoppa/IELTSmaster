import React from 'react';
import {View, Text} from 'react-native';
import testData from '../fixtures/testData';

class TestsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>{testData[0].sec1Q[0]}</Text>
            </View>
        );
    }
}

export default TestsScreen;