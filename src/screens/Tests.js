import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import testData from '../fixtures/testData';
import TestButton from '../components/UI/TestButton';


class TestsScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {

        const buttons = testData.map((test, index) => 
            <TestButton 
                key={index}
                onSelectTest={() => this.props.navigation.navigate('Test')}
                answers={this.props.answers.length}
                
                >Test {index + 1}</TestButton>)
        return (
            <View style={styles.container}>
                {buttons}
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        answers: state.answers.answers
      };
};

export default connect(mapStateToProps)(TestsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: 30
    }
});