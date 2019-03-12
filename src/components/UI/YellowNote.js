import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const YellowNote = (props) => (
    <View style={styles.container}>
        <View style={styles.endPiece}></View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    </View>
);


export default YellowNote;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f7f4b4",
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row"
    },
    text: {
        fontSize: 15
    },
    endPiece: {
        backgroundColor: "#682c02",
        height: "100%",
        width: 4
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
        
    }
});