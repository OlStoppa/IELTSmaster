import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const StopButton = (props) => (
    // <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.recordButton} onPress={props.onStopRecord}>
            <View style={styles.recordButton}>
                <Icon name="md-square" size={80} color="red"></Icon>

            </View>
        </TouchableOpacity>
    // </View>
);

export default StopButton;

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
        padding: 20,
        backgroundColor: "#c4dfe6"
    }
}); 