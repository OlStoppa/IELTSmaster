import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MainText from '../components/UI/MainText';
import AnswerButton from '../components/UI/AnswerButton';
import testData from '../fixtures/testData';
import Countdown from '../components/components/Countdown';
import { addAnswer, deleteAnswer } from '../store/actions/answers';
import ProgressButton from '../components/UI/ProgressButton';


class PartTwo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        countdown: true
    }
    static navigationOptions = ({ navigation }) => ({
        title: `Part ${navigation.state.params.part}`
        });

    handleCountdown = () => {
        this.setState({
            countdown: false
        });
    }

    handleAddAnswer = (path, testNumber, index, part) => {
        console.log(part)
        this.props.onAddAnswer(path, testNumber, index, part);
    }

    handleDeleteAnswer = (index, testNumber, part) => {
        this.props.onDeleteAnswer(index, testNumber, part);
    }

    componentDidMount() {
        const testNumber = this.props.navigation.state.params.testNumber;
        if ( this.props.answers.part2[testNumber][0] !==  0) {
            this.handleCountdown();
        }
    }

    render() {
        const testNumber = this.props.navigation.state.params.testNumber;
        const answerPath = this.props.answers.part2[testNumber][0];
        return (
            <View >
                <View style={{ padding: 3, height: "50%", backgroundColor: "#d3d3d3" }}>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 25 }}>{testData[testNumber].sec2[0]}</Text>
                        <Text>You should say:</Text>
                        <Text style={styles.mediumText}>{testData[testNumber].sec2[1]}</Text>
                        <Text style={styles.mediumText}>{testData[testNumber].sec2[2]}</Text>
                        <Text style={styles.mediumText}>{testData[testNumber].sec2[3]}</Text>
                        <Text style={styles.mediumText}>{testData[testNumber].sec2[4]}</Text>
                    </View>
                </View>
                <View style={styles.answer}>
                    {
                        this.state.countdown ?
                            <Countdown
                                endCountdown={this.handleCountdown}
                            />
                            :
                            <AnswerButton
                                index={0}
                                onAddAnswer={this.handleAddAnswer}
                                onDeleteAnswer={this.handleDeleteAnswer}
                                testNumber={testNumber}
                                part={'part2'}
                                answerPath={answerPath}

                            />
                    }

                </View>
                {
                    answerPath !== 0 && 
                    <View style={styles.progressButton}>
                    <ProgressButton
                        text="Continue"
                        onPress={() => {this.props.navigation.navigate('TestParts', {test: testNumber, title: `Test ${testNumber + 1}`})}}
                        />
                    </View>
                }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(PartTwo);



const styles = StyleSheet.create({
    conatiner: {
        display: "flex"
    },
    card: {
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        borderWidth: 1,
        borderColor: "black",
        padding: 20,
        fontSize: 20,
        backgroundColor: "#f9f9f9"
        
        
    },
    answer: {
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    mediumText: {
        fontSize: 20,
        marginBottom: 5,
        paddingLeft: 8

    },
    progressButton: {
    
        position: "absolute",
        zIndex: 5,
        bottom: "55%",
        alignSelf: "flex-end"
      }
});