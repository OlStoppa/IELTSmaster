import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TestButton = (props) => {
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onSelectTest}>
            <View style={[styles.testButton, props.answers > 0 ? styles.alt : null]}>
                <Text style={{ alignSelf: "flex-start" }}>{props.children}</Text>
                <View style={styles.footer}>
                    <Text style={{ textAlign: "right" }}>{props.answers}/15</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TestButton;

const styles = StyleSheet.create({
    testButton: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: "black",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#66a5ad",
        margin: 20    
    },
    touchable: {
        height: 100,
        marginTop: 50
    },
    footer: {
        height: "20%", 
        backgroundColor: "white", 
        width: "100%"
        
    },
    alt: {borderColor: "red"}
});