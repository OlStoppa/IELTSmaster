import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Sound from 'react-native-sound';
import PlayButton from '../components/UI/PlayButton';
import AnswerButton from '../components/UI/AnswerButton';
import MainText from '../components/UI/MainText';

const QuestionScreen = props => {
  const sound = new Sound(props.audio, Sound.MAIN_BUNDLE);
  return (
    <View style={styles.container}>
      <View style={styles.questionView}>
        <MainText>Question {props.index + 1}</MainText>
        <Text>Listen to the question</Text>
        <View style={{ paddingTop: 50 }}>
          <PlayButton
            onQuestionPlay={() => {
              sound.play();
            }}
          />
        </View>
      </View>
      <View style={styles.answerView}>
        <AnswerButton
          index={props.index}
          onAddAnswer={props.onAddAnswer}
          onDeleteAnswer={props.onDeleteAnswer}
          answerPath={props.answerPath}
          testNumber={props.testNumber}
          part={props.part}
        />
      </View>
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c4dfe6',
  },
  questionView: {
    height: '40%',
    borderBottomWidth: 2,
    width: '100%',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
  },
  answerView: {
    display: 'flex',
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 100,
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
