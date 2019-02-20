import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const PlayButton = (props) => (
    // <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.playButton} onPress={props.onQuestionPlay}>
            <View style={styles.playButton}>
                <Icon name="ios-play" size={80} color="green"></Icon>

            </View>
         </TouchableOpacity>
    // </View>
);

export default PlayButton;

const styles = StyleSheet.create({
    playButton: {
        height: 100,
        width:100,
        borderRadius: 50,
        backgroundColor: "#eee",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 10,
        borderColor: "green"

    },
    buttonContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c4dfe6"
    }
});