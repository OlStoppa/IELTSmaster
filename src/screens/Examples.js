import React from 'react'; 
import {View, Image, StyleSheet } from 'react-native';
import underConstructionImage from '../../src/assets/under-construction_geek_man_01.png';


const Examples = () => (
    <View style={styles.container}>
        <Image source={underConstructionImage} style={{height: 200, resizeMode: "contain"}}/>
    </View>
);

export default Examples;

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
