import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import underConstructionImage from '../../src/assets/under-construction_geek_man_01.png';


class LessonsScreen extends React.Component {
    constructor(props){
        super(props);
        
    }
    



    render() {
        
        
        return (
            <View style={styles.container}>
                <Image source={underConstructionImage} style={{height: 200, resizeMode: "contain"}}/>
            
            
            </View>
        );
    }
}

export default LessonsScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});


