import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainText from '../components/UI/MainText';
import AnswerButton from '../components/UI/AnswerButton';
import testData from '../fixtures/testData';
import Countdown from '../components/components/Countdown';


class PartTwo extends React.Component {
    state = {
        countdown: true
    }

    handleCountdown = () => {
        this.setState({
            countdown: false
        });
    }
    render() {
        return (
            <View>
                <View style={{padding:3, backgroundColor: "#d3d3d3", height: "50%"}}>
               <View style={styles.card}>
                   <Text style={{ fontSize: 28}}>{testData[0].sec2[0]}</Text>
                   <Text style={styles.mediumText}>{testData[0].sec2[1]}</Text>
                   <Text style={styles.mediumText}>{testData[0].sec2[2]}</Text>
                   <Text style={styles.mediumText}>{testData[0].sec2[3]}</Text>
                   <Text style={styles.mediumText}>{testData[0].sec2[4]}</Text>
               </View>
               </View>
               <View style={styles.answer}>
                {this.state.countdown ? 
                <Countdown 
                    endCountdown={this.handleCountdown}
                /> 
                : 
                <AnswerButton />}
                
               </View>
            </View>
        );
    }
}

export default PartTwo;

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