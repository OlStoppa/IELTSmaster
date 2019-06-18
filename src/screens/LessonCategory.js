import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LessonBox from '../components/UI/LessonBox';
import lessons from '../fixtures/lessonData';

class LessonCategory extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,

    headerStyle: {
      backgroundColor: '#07575B',
    },
    headerTitleStyle: {
      color: 'white',
    },
  });

  render() {
    const { category } = this.props.navigation.state.params;
    const displayLessonBoxes = lessons[category].map((lesson, index) => {
      return (
        <LessonBox
          key={index}
          name={lesson.name}
          icon={lesson.icon}
          style={lesson.style}
          onPress={() =>
            this.props.navigation.navigate('LessonScreen', {
              content: lesson.content,
              title: lesson.name,
            })
          }
        />
      );
    });
    return (
      <View style={styles.container}>
        {displayLessonBoxes}
        <Text>More lessons coming soon!</Text>
      </View>
    );
  }
}

export default LessonCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    height: '100%',
  },
});
