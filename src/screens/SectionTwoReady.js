import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MainText from '../components/UI/MainText';
import Header from '../components/UI/Header';

class SectionTwoReady extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#07575B'
        }
    });

    render() {
        const testNumber = this.props.navigation.state.params.testNumber;
        return (
            <View>
                <View style={{ width: "100%", alignSelf: "flex-start" }}>
                    <Header>Part 2</Header>
                </View>
                <View style={styles.container}>

                    <MainText>You will have 60 seconds to plan your answer to the question card. You may make notes.</MainText>

                    <Button title="Ready" onPress={() => { this.props.navigation.navigate('PartTwo', { testNumber, part: 2 }) }} />
                </View>
            </View>
        );
    }
};

export default SectionTwoReady;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    }
});