import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MainText from '../components/UI/MainText';
import AnswerButton from '../components/UI/AnswerButton';
import testData from '../fixtures/testData';
import Countdown from '../components/components/Countdown';
import { addAnswer, deleteAnswer } from '../store/actions/answers';


class PartTwo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        countdown: true
    }

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
            <View>
                <View style={{ padding: 3, backgroundColor: "#d3d3d3", height: "50%" }}>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 28 }}>{testData[testNumber].sec2[0]}</Text>
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
        fontSize: 20
        
        
    },
    answer: {
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    mediumText: {
        fontSize: 22
    }
});