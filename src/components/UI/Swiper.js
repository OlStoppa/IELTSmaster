import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import SwiperFlatList from 'react-native-swiper-flatlist';
import QuestionScreen from '../../screens/QuestionScreen';
import testData from '../../fixtures/testData';
import { addAnswer, deleteAnswer } from '../../store/actions/answers';

class Swiper extends React.Component {



  handleAddAnswer = (path, index) => {
    this.props.onAddAnswer(path, index);
  }

  handleDeleteAnswer = (index) => {
    this.props.onDeleteAnswer(index);
  }


  render() {
    const content = testData[1].sec1Q.map((question, index) => {
      const audioPath = testData[0].sec1Audio[index];
      const answerPath = this.props.answers[index];
      return (
        
        <View key={index} style={[styles.child]}>
          {index === testData[1].sec1Q.length - 1 &&
          <Button
            title="Go to Part 2"
            onPress = {()=>{this.props.navigation.navigate('PartTwoReady')} }
          />
          }
          <QuestionScreen
            index={index}
            audio={audioPath}
            onAddAnswer={this.handleAddAnswer}
            answerPath={answerPath}
            onDeleteAnswer={this.handleDeleteAnswer}
          />
        </View>
      );
    })
    return (
      <View style={styles.container}>
        <SwiperFlatList
          showPagination
          index={0}
        >
          {content}
        </SwiperFlatList>
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddAnswer: (answer, index) => dispatch(addAnswer(answer, index)),
    onDeleteAnswer: (index) => dispatch(deleteAnswer(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Swiper);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    height,
    width,
    justifyContent: 'center'
  }
});


