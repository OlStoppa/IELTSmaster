import React from 'react';
import { Modal, Text, View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import DefaultInput from '../UI/DefaultInput';
import ProgressButton from '../UI/ProgressButton';
import validate from '../../utility/validation';
import Header from '../UI/Header';
import { storage } from '../../firebase';
import RNFetchBlob from 'rn-fetch-blob';

class SubmitTest extends React.Component {
    state = {
        email: {
            value: "",
            valid: false,
            validationRules: {
                isEmail: true
            },
            touched: false
        },
        confirmEmail: {
            value: "",
            valid: false,
            validationRules: {
                equalTo: 'email'
            },
            touched: false

        }
    }

    updateInputState = (key, value) => {
        let connectedValue = {};

        if (this.state[key].validationRules.equalTo) {
            const equalControl = this.state[key].validationRules.equalTo;
            const equalValue = this.state[equalControl].value
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === 'email') {

            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }

        this.setState(prevState => {
            return {

                ...prevState,
                confirmEmail: {
                    ...prevState.confirmEmail,
                    valid: key === 'email' ? validate(prevState.confirmEmail.value, prevState.confirmEmail.validationRules, connectedValue) : prevState.confirmEmail.valid
                },
                [key]: {
                    ...prevState[key],
                    value: value,
                    valid: validate(value, prevState[key].validationRules, connectedValue),
                    touched: true
                }


            }

        });
    }

    handleUploadAnswers = (email, name, answers, testNumber) => {
        this.setState({uploading: true})
        const thisTest = [...answers.part1[testNumber], ...answers.part2[testNumber], ...answers.part3[testNumber]];
        Promise.all(thisTest.map((answer, index) => {
            const ref = storage.ref(`${name}/${index}.mp4`);
            const Blob = RNFetchBlob.polyfill.Blob;
            const fs = RNFetchBlob.fs;
            const path = answer.slice(7);
            window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
            window.Blob = Blob;
            const audioFile = RNFetchBlob.wrap(path);
            console.log(audioFile);
            let uploadBlob = null;
            Blob.build(audioFile, { type: 'media/mp4;' })
                .then((audioBlob) => {
                    uploadBlob = audioBlob;
                    return ref.put(audioBlob, { 
                        contentType: 'media/mp4',
                        customMetadata: {
                            'email' : email
                        } 
                    });
                })
                .then(() => {
                    return uploadBlob.close()
                })
        })).then(() => {
            this.setState({uploading: false})
            
        })
        
    }
    render() {
        console.log(this.props.answers)
        return (
            <Modal 
                visible={this.props.visible}
                onRequestClose={()=> {}}
                animationType="slide"
            
            >
                <Header style={{ height: 50 }}>Get Your Band Score</Header>
                
                <View style={styles.container}>
                
                    
                    
                    
                    <View style={styles.note}>
                    {
                    this.state.uploading 
                    ?
                    <Text>Uploading</Text>
                    :
                    <Text>Submit your test for grading by our team of experienced IELTS tutors.
                        You will recieve your band score and feedback to the E-mail provided within 24 hours.
                </Text>
                    }
                </View>

                <View style={styles.formBox}>
                    
                    <DefaultInput
                        placeholder="Your Email"
                        value={this.state.email.value}
                        onChangeText={(val) => this.updateInputState('email', val)}
                        valid={this.state.email.valid}
                        touched={this.state.email.touched}
                    />
                    <DefaultInput
                        placeholder="Confirm Email"
                        value={this.state.confirmEmail.value}
                        onChangeText={(val) => this.updateInputState('confirmEmail', val)}
                        valid={this.state.confirmEmail.valid}
                        touched={this.state.confirmEmail.touched}
                    />
                    <ProgressButton
                        text="Submit"
                        disabled={
                            !this.state.confirmEmail.valid ||
                            !this.state.email.valid
                        }
                        onPress={() => { this.handleUploadAnswers(this.state.email.value, this.props.name, this.props.answers, this.props.testNumber)}}

                    />
                </View>
                    
                
                
                
                    
                  
                </View>
                
            </Modal>
        );
    }
}

export default SubmitTest;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d3d3d3"
    },
    formBox: {
        height: 200,
        width: "100%",
        backgroundColor: "#66a5ad",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10
    },
    note: {
        padding: 20,
        height: "20%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white"
    }

});