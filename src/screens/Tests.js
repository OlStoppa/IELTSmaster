import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import testData from '../fixtures/testData';
import TestButton from '../components/UI/TestButton';

class TestsScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {

        const buttons = testData.map((test, index) => 
            <TestButton 
                key={index}
                onSelectTest={() => this.props.navigation.navigate('Test')}
                
                
                >{index}</TestButton>)
        return (
            <View style={styles.container}>
                {buttons}
            </View>
        );
    }
}

export default TestsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: 30
    }
});