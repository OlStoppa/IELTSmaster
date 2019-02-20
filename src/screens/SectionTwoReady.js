import React from 'react';
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native';
import MainText from '../components/UI/MainText';
import Header from '../components/UI/Header';

const SectionTwoReady = (props) => {
    const testNumber = props.navigation.state.params.testNumber;
    return (
        <View>
        <View style={{width: "100%", alignSelf: "flex-start"}}>
            <Header>Part 2</Header>
        </View>
        <View style={styles.container}>
            
            <MainText>You will have 60 seconds to plan your answer to the question card. You may make notes.</MainText>
            
            <Button title="Ready" onPress={() => {props.navigation.navigate('PartTwo', {testNumber})}}/>
        </View>
        </View>
    );
};

export default SectionTwoReady;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
        
        
    }
});