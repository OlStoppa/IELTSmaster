import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';

class TestParts extends React.Component {
    render() {
        const { part1, part2, part3 } = this.props.answers;
        const testNumber = this.props.navigation.state.params.test;
        const partOnePercentComplete = 100 / 8 * part1[testNumber].filter(answer => answer !== 0).length;
        const partTwoPercentComplete = part2[testNumber][0] ? 100 : 0;
        const partThreePercentComplete = 100 / 6 * part3[testNumber].filter(answer => answer !== 0).length;
        return (
            <View style={styles.container}>
                <View style={{padding: 20}}>
                    <AnimatedCircularProgress
                    size={120}
                    width={3}
                    fill={partOnePercentComplete}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                    >
                    {
                        (fill) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Test', { test: testNumber, part: 1 })}>
                            <View style={styles.button}>
                                <Text>Part 1</Text>

                            </View>
                        </TouchableOpacity>
                        )
                    }
                    </AnimatedCircularProgress>
                </View>
                <View style={{padding: 20}}>
                    <AnimatedCircularProgress
                    size={120}
                    width={3}
                    fill={partTwoPercentComplete}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                    >
                    {
                        (fill) => (
                        <TouchableOpacity onPress={
                            partTwoPercentComplete === 0 ? () => this.props.navigation.navigate('PartTwoReady', {testNumber: testNumber})
                            :
                            () => this.props.navigation.navigate('PartTwo', { testNumber })


                        }>
                            <View style={styles.button}>
                                <Text>Part 2</Text>

                            </View>
                        </TouchableOpacity>
                        )
                    }
                    </AnimatedCircularProgress>
                </View>
                <View style={{padding: 20}}>
                    <AnimatedCircularProgress
                    size={120}
                    width={3}
                    fill={partThreePercentComplete}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                    >
                    {
                        (fill) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Test', { test: testNumber, part: 3 })}>
                            <View style={styles.button}>
                                <Text>Part 3</Text>

                            </View>
                        </TouchableOpacity>
                        )
                    }
                    </AnimatedCircularProgress>
                </View>
                {
                    partOnePercentComplete + partTwoPercentComplete + partThreePercentComplete === 300 &&
                    <Button>Get My Band Score</Button>
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

export default connect(mapStateToProps)(TestParts);


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flex: 1
    },
    button: {
        height: 100,
        width: 100,
        backgroundColor: "#c4dfe6",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }

});
