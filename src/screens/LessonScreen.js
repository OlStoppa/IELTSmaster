import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';


class LessonScreen extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
        
        });
    render () {
         
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                {
                    this.props.navigation.state.params.content
                }
                </View>
            </View>
            </ScrollView>
        );
    }
}

export default LessonScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#d3d3d3",
        padding: 5
    },
    card: {
        backgroundColor: "white",
        elevation: 10,
        padding: 5
    }
})