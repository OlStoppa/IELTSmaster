import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage, Button } from 'react-native';
import { connect } from 'react-redux';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Orientation from 'react-native-orientation';
import QuestionScreen from '../../screens/QuestionScreen';
import testData from '../../fixtures/testData';
import { addAnswer, deleteAnswer } from '../../store/actions/answers';
import ProgressButton from '../UI/ProgressButton';
import SubmitTest from '../components/SubmitTest';



class Swiper extends React.Component {
  constructor(props) {
    super(props)
    

  }
  state = {
    modal: false
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Part ${navigation.state.params.part}`
    });

  
  modalHandler = () => {
    this.setState((prevState) => {
      return {
        modal: !prevState.modal
      } 
    })
  }

  handleAddAnswer = (path, testNumber, index, part) => {
    console.log(part)
    this.props.onAddAnswer(path, testNumber, index, part);
   

    
  }

  handleDeleteAnswer = (index, testNumber, part) => {
    this.props.onDeleteAnswer(index, testNumber, part);
  }

  testFinished = (answerPath, testPartPath, index, testNumber) => {
    
    const { part1, part2, part3 } = this.props.answers;
    const partOne = part1[testNumber].filter(answer => answer !== 0).length;
    const partTwo = part2[testNumber][0] ? 1 : 0;
    const partThree = part3[testNumber].filter(answer => answer !== 0).length;
    if (partOne + partTwo + partThree === 12) {
      return <View style={styles.progressButton}>
      <ProgressButton
        
        text="Get My Score"
        onPress = {this.modalHandler}
      />
      </View>;
    } else {
      return   !!answerPath &&
      <View style={styles.progressButton}>
      <ProgressButton
        
        text="Continue"
        onPress = {()=>{
          index + 1 === testData[testNumber][testPartPath].length 
          ?
          this.props.navigation.pop()
          :
         
          this.refs.swiper._scrollToIndex(index + 1)
          
        }
      }
      />
      </View>;
    }
  }
  _storeData = async (data) => {
    try {
        await AsyncStorage.setItem('userToken', data);
        console.log('storing');
    } catch (error) {
        console.log(error);
    }
}

  componentDidMount(){
    Orientation.lockToPortrait();
  }
  componentWillUnmount() {
    Orientation.unlockAllOrientations();
    const {name, id, answers} = this.props;
    const data = {
      name,
      id,
      answers
    };
   this._storeData(JSON.stringify(data));
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
      const testFinished = this.testFinished(answerPath, testPartPath, index, testNumber);
      
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
          {
            testFinished
          
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
        <SubmitTest 
        visible={this.state.modal}
        testNumber={testNumber}
        name={this.props.name}
        id={this.props.id}
        answers={this.props.answers}
        
        />
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers,
    name: state.answers.name,
    id: state.answers.id
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
    bottom: "55%",
    alignSelf: "flex-end"
  }
});


