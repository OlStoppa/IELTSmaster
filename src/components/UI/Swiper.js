import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import SwiperFlatList from 'react-native-swiper-flatlist';
import QuestionScreen from '../../screens/QuestionScreen';
import testData from '../../fixtures/testData';
import { addAnswer, deleteAnswer } from '../../store/actions/answers';

class Swiper extends React.Component {


    
    handleAddAnswer = (path, index) => {
        this.props.onAddAnswer(path, index);
    }
    
   
    render() {
        
        // const answers = "file://sdcard/question0.mp4";
        const content = testData[1].sec1Q.map((question, index)=>{
            
            
        
        const audioPath = testData[0].sec1Audio[index];
        const answerPath = this.props.answers[index];
            return (
                <View style={[styles.child]}>
                    <QuestionScreen 
                        index={index}
                        audio={audioPath}
                        onAddAnswer={this.handleAddAnswer}
                        answerPath={answerPath}
                       
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
        onAddAnswer: (answer, index) => dispatch(addAnswer(answer, index))

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


