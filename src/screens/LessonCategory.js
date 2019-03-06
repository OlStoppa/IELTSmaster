import React from 'react';
import { View, StyleSheet } from 'react-native';
import LessonBox from '../components/UI/LessonBox';
import lessons from '../fixtures/lessonData';


class LessonCategory extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        
            headerStyle:{
                backgroundColor:'#07575B'
            },
            headerTitleStyle: {
                color: "white"
            }
        });
    render() {
        const category = this.props.navigation.state.params.category;
        const displayLessonBoxes = lessons[category].map((lesson, index) => {
            return (
                <LessonBox
                    name={lesson.name}
                    icon={lesson.icon}
                    style={lesson.style}

                />
            );
        })
        return (
            <View style={styles.container}>
                {displayLessonBoxes}
            </View>
        );
    }
}

export default LessonCategory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d3d3d3",
        height: "100%"
    }
});