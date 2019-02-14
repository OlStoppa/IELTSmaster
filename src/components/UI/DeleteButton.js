import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DeleteButton = (props) => (
    <TouchableOpacity style={styles.deleteButton} onPress={props.onDeleteAnswer}>
        <View style={styles.deleteButton}>
            <Icon name="ios-trash" size={30} color="grey"/>
        </View>
    </TouchableOpacity>
);

export default DeleteButton;

const styles = StyleSheet.create({
    deleteButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    }
});
