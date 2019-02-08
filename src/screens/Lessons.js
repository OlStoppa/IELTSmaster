import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class LessonsScreen extends React.Component {
    constructor(props){
        super(props);
        
    }
    



    render() {
        
        
        return (
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton}>
                <View style={styles.playButton}>
                    <Icon name="ios-play" size={80} color="green"></Icon>

                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.recordButton}>
                <View style={styles.recordButton}>
                    <Icon name="md-microphone" size={80} color="red"></Icon>

                </View>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}

export default LessonsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#222"
    },

    playButton: {
        height: 100,
        width:100,
        borderRadius: 50,
        backgroundColor: "#aaa",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 6,
        borderColor: "green"

    },
    recordButton: {
        height: 100,
        width:100,
        borderRadius: 50,
        backgroundColor: "#aaa",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 6,
        borderColor: "red"
    },
    buttonContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#033330"
    }
});
