import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import CategoryBox from '../components/UI/CategoryBox';

class LessonsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
        <ScrollView>
            <View style={styles.container}>
            
                <View>
                    <CategoryBox
                        onPress={() => { this.props.navigation.navigate("LessonCategory", { category: "general", title: "General Lessons" } )}}
                    >General
                    </CategoryBox>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", verticalPadding: 20 }}>
                    <CategoryBox
                        boxStyle={{ backgroundColor: "#e0d90b" }}
                        onPress={() => { this.props.navigation.navigate("LessonCategory", { category: "partOne", title: "Part 1 Lessons" } )}}
                    >Part 1</CategoryBox>
                    <CategoryBox
                        boxStyle={{ backgroundColor: "#08718e" }}
                        onPress={() => { this.props.navigation.navigate("LessonCategory", { category: "partTwo", title: "Part 2 Lessons" } )}}
                    >Part 2</CategoryBox>
                </View>
                <View>
                    <CategoryBox
                        boxStyle={{ backgroundColor: "#8e080a" }}
                        onPress={() => { this.props.navigation.navigate("LessonCategory", { category: "partThree", title: "Part 3 Lessons" } )}}
                    >Part 3</CategoryBox>
                </View>
                
            </View>
            </ScrollView>
        );
    }
}

export default LessonsScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        // height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#e0e0e0",
        marginTop: 20
    }
});


