import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LessonBox from './LessonBox';
import lessons from '../../fixtures/lessonData';

const lessonImages = [...lessons.general, ...lessons.partOne, ...lessons.partTwo];

const Feedbox = props => {
  const lessonSwiper = lessonImages.map((lesson, index) => {
    return (
      <View key={index} style={[{ width: 100, alignContent: 'center', margin: 5 }]}>
        <View style={{ height: '60%', justifyContent: 'center' }}>
          <LessonBox
            icon={lesson.icon}
            style={[lesson.style]}
            onPress={() =>
              props.navigation.navigate('LessonScreen', {
                content: lesson.content,
                title: lesson.name,
              })
            }
          />
        </View>
        <View style={{ width: '100%', justifyContent: 'center' }}>
          <Text>{lesson.name}</Text>
        </View>
      </View>
    );
  });

  return (
    <TouchableOpacity onPress={props.handlePress}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.mainText}>{props.mainText}</Text>
            {props.lessonData && <Text>View More</Text>}
          </View>
          <Text>{props.subText}</Text>
        </View>
        <View style={styles.imageView}>
          {props.lessonData ? (
            <View style={{ height: '100%' }}>
              <ScrollView horizontal>{lessonSwiper}</ScrollView>
            </View>
          ) : (
            <ImageBackground source={props.source} style={styles.imageBackground}>
              <Text style={styles.imageText}>{props.imageText}</Text>
            </ImageBackground>
          )}
        </View>
        <View style={!props.lessonData && styles.footView}>
          <Text>{props.footText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Feedbox;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    elevation: 40,
  },
  topView: {
    width: '100%',
    padding: 5,
  },
  imageView: {
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footView: {
    height: '15%',
    padding: 5,
  },
  imageBackground: {
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: 'black',
    fontSize: 30,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  child: {
    width: '30%',
  },
});
