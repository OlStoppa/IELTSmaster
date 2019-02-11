import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TestButton = (props) => {
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onSelectTest}>
            <View style={styles.testButton}><Text>{props.children}</Text></View>
        </TouchableOpacity>
    );
};

export default TestButton;

const styles = StyleSheet.create({
    testButton: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#66a5ad",
        margin: 20
        
        
        
        
    },
    touchable: {
        height: 100,
        marginTop: 50
    }
});