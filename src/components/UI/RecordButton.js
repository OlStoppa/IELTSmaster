import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const RecordButton = (props) => (
    // <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.recordButton} onPress={props.onRecord}>
            <View style={styles.recordButton}>
                <Icon name="md-microphone" size={80} color="red"></Icon>

            </View>
        </TouchableOpacity>
    // </View>
);

export default RecordButton;

const styles = StyleSheet.create({
    recordButton: {
        height: 100,
        width:100,
        borderRadius: 50,
        backgroundColor: "#eee",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: "red"
    },
    buttonContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c4dfe6"
    }
}); 