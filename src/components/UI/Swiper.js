import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import SwiperFlatList from 'react-native-swiper-flatlist';
import QuestionScreen from '../../screens/QuestionScreen';
import testData from '../../fixtures/testData';
import { addAnswer, deleteAnswer } from '../../store/actions/answers';
// import { storage } from '../../firebase';
// import RNFetchBlob from 'rn-fetch-blob';


class Swiper extends React.Component {
  constructor(props) {
    super(props)
    

  }

  


  handleAddAnswer = (path, testNumber, index, part) => {
    console.log(part)
    this.props.onAddAnswer(path, testNumber, index, part);
    // const ref = storage.ref('test/answer.mp4');
    // const Blob = RNFetchBlob.polyfill.Blob;
    // const fs = RNFetchBlob.fs;
    // window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    // window.Blob = Blob;
    // const audioFile = RNFetchBlob.wrap(path);
    // console.log(audioFile);
    // let uploadBlob = null;
    // Blob.build(audioFile, { type: 'media/mp4;'})
    //   .then((audioBlob) => {
    //     uploadBlob = audioBlob;
    //     return ref.put(audioBlob, {contentType: 'media/mp4'} );
    //   })
    //   .then(() => {
    //     uploadBlob.close()
    //   })

    
  }

  handleDeleteAnswer = (index, testNumber, part) => {
    this.props.onDeleteAnswer(index, testNumber, part);
  }


  render() {
    const testNumber = this.props.navigation.state.params.test;
    const part = this.props.navigation.state.params.part;
    const testPartPath = `sec${part}`;
    const statePath = `part${part}`;
    const questionPath = `sec${part}Audio`;
    const content = testData[testNumber][testPartPath].map((question, index) => {
      const audioPath = testData[testNumber][questionPath][index];
      const answerPath = this.props.answers[statePath][testNumber][index];
      console.log(statePath)
      return (
        
        <View key={index} style={[styles.child]}>
          
          <QuestionScreen
            index={index}
            audio={audioPath}
            onAddAnswer={this.handleAddAnswer}
            answerPath={answerPath}
            onDeleteAnswer={this.handleDeleteAnswer}
            testNumber={testNumber}
            part={statePath}
          />
          {!!answerPath &&
          <View style={styles.progressButton}>
          <Button
            
            title="Continue"
            onPress = {()=>{this.refs.swiper._scrollToIndex(index + 1)} }
          />
          </View>
          }
        </View>
      );
    })
    return (
      <View style={styles.container}>
        <SwiperFlatList
          ref="swiper"
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
    onAddAnswer: (answer, testNumber, index, part) => dispatch(addAnswer(answer, testNumber, index, part)),
    onDeleteAnswer: (index, testNumber, part) => dispatch(deleteAnswer(index, testNumber, part))
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
  }, 
  progressButton: {
    
    position: "absolute",
    zIndex: 5,
    bottom: "50%",
    alignSelf: "flex-end"
  }
});


