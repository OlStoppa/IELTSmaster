import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Feedbox = (props) => {
    return (
        <TouchableOpacity onPress={props.handlePress}>
            <View style={styles.constainer}>
                <View style={styles.topView}>
                    <Text style={styles.mainText}>{props.mainText}</Text>
                    <Text>{props.subText}</Text>
                </View>
                <View style={styles.imageView}>
                    <ImageBackground source={props.source} style={styles.imageBackground}>
                    <Text style={styles.imageText}>{props.imageText}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.footView}>
                    <Text>{props.footText}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default Feedbox;

const styles = StyleSheet.create({
    constainer: {
        height: "100%",
        backgroundColor: "white",
    },
    topView: {
        
        width: "100%",
        padding: 5
    },
    imageView: {
        height: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    footView: {
        height: "15%",
        padding: 5
    },
    imageBackground: {
        width: "100%", 
        flex: 1, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        
    },
    imageText: {
        color: "black",
        fontSize: 30
    }, 
    mainText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    }

});