import React from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import * as RNIap from 'react-native-iap';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from '../UI/DefaultInput';
import ProgressButton from '../UI/ProgressButton';
import validate from '../../utility/validation';
import Header from '../UI/Header';
import { storage } from '../../firebase';
import gradeMy from '../../assets/gradeMy.png';

const itemSkus = Platform.select({
  android: ['test_feedback_bandscore'],
});
let purchaseUpdate;
let purchaseError;

class SubmitTest extends React.Component {
  state = {
    email: {
      value: '',
      valid: false,
      validationRules: {
        isEmail: true,
      },
      touched: false,
    },
    confirmEmail: {
      value: '',
      valid: false,
      validationRules: {
        equalTo: 'email',
      },
      touched: false,
    },
    uploading: false,
    finished: false,
    products: {},
    paid: false,
  };

  componentWillMount() {
    if (purchaseUpdate) {
      purchaseUpdate.remove();
      purchaseUpdate = null;
    }
    if (purchaseError) {
      purchaseError.remove();
      purchaseError = null;
    }
  }

  async componentDidMount() {
    console.log('mounting submit');
    try {
      const result = await RNIap.initConnection();
      purchaseUpdate = RNIap.purchaseUpdatedListener(() => {
        // eslint-disable-next-line react/prop-types
        console.log(this.props);
        const { email, name, answers, testNumber } = this.props;
        this.setState({ paid: true }, this.handleUploadAnswers(email, name, answers, testNumber));

        RNIap.consumeAllItemsAndroid();
      });

      purchaseError = RNIap.purchaseErrorListener((error: PurchaseError) => {
        console.log('purchaseErrorListener', error);
        Alert.alert('purchase error', JSON.stringify(error));
      });

      const products = await RNIap.getProducts(itemSkus);
      this.setState({ products });
    } catch (err) {
      console.warn(err);
    }
  }

  componentWillUnmount() {
    console.log('unmounting submit');
    RNIap.endConnectionAndroid();
  }

  purchaseProduct = async () => {
    try {
      await RNIap.requestPurchase('test_feedback_bandscore');
    } catch (err) {
      console.warn(err.code, err.message);
    }
  };

  updateInputState = (key, value) => {
    let connectedValue = {};

    if (this.state[key].validationRules.equalTo) {
      const equalControl = this.state[key].validationRules.equalTo;
      const equalValue = this.state[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue,
      };
    }
    if (key === 'email') {
      connectedValue = {
        ...connectedValue,
        equalTo: value,
      };
    }

    this.setState(prevState => {
      return {
        ...prevState,
        confirmEmail: {
          ...prevState.confirmEmail,
          valid:
            key === 'email'
              ? validate(
                  prevState.confirmEmail.value,
                  prevState.confirmEmail.validationRules,
                  connectedValue
                )
              : prevState.confirmEmail.valid,
        },
        [key]: {
          ...prevState[key],
          value,
          valid: validate(value, prevState[key].validationRules, connectedValue),
          touched: true,
        },
      };
    });
  };

  handleUploadAnswers = (email, name, answers, testNumber) => {
    this.setState({ uploading: true });
    const thisTest = [
      ...answers.part1[testNumber],
      ...answers.part2[testNumber],
      ...answers.part3[testNumber],
    ];
    const { Blob } = RNFetchBlob.polyfill;

    const { fs } = RNFetchBlob;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;

    const timeStamp = moment().format();
    Promise.all(
      thisTest.map((answer, index) => {
        const ref = storage.ref(`${name}-${this.props.id}-${timeStamp}/${index}.mp4`);
        const audioFile = RNFetchBlob.wrap(answer);
        console.log(audioFile);
        let uploadBlob = null;
        return Blob.build(audioFile, { type: 'media/mp4' })
          .then(audioBlob => {
            uploadBlob = audioBlob;
            console.log('iploading a file');
            return ref.put(uploadBlob, {
              contentType: 'media/mp4',
              customMetadata: {
                email,
              },
            });
          })
          .then(audioBlob => {
            console.log('closing blob');
            return audioBlob.close();
          })
          .catch(err => {
            console.log(err);
          });
      })
    ).then(() => {
      console.log('finished uploading');
      this.setState({ uploading: false, finished: true });
    });
  };

  render() {
    return (
      <Modal visible={this.props.visible} onRequestClose={() => {}} animationType="slide">
        <Header style={{ height: 50 }} textStyle={{ fontSize: 20 }}>
          Get Your Band Score
        </Header>
        <TouchableOpacity onPress={this.props.closeModal} style={styles.closeButton}>
          <Icon name="ios-arrow-back" color="white" size={30} />
        </TouchableOpacity>
        {this.state.finished ? (
          <View style={styles.container}>
            <View
              style={{
                height: '90%',
                width: '100%',
                alignItems: 'center',
                padding: 20,

                backgroundColor: 'white',
              }}
            >
              <Text style={{ fontSize: 25, marginBottom: 30 }}>Answers Submitted!</Text>
              <Text>
                You will recieve a report of your band score and feedback to{' '}
                {this.state.email.value}
                within 48 hours.
              </Text>
              <Text>Good Luck!</Text>
              <Image source={gradeMy} style={{ width: '50%', resizeMode: 'contain' }} />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            
              {this.state.uploading ? (
                <View
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0, 0.8)',
                    zIndex: 20,
                  }}
                >
                  <ActivityIndicator />
                </View>
              ) : (
                <View style={styles.note}>
                <Text>
                  Submit your test for grading by our team of experienced IELTS tutors. You will
                  recieve your band score and feedback to the E-mail provided within 24 hours.
                </Text>
                </View>
              )}
            

            <View style={styles.formBox}>
              <DefaultInput
                placeholder="Your Email"
                value={this.state.email.value}
                onChangeText={val => this.updateInputState('email', val)}
                valid={this.state.email.valid}
                touched={this.state.email.touched}
              />
              <DefaultInput
                placeholder="Confirm Email"
                value={this.state.confirmEmail.value}
                onChangeText={val => this.updateInputState('confirmEmail', val)}
                valid={this.state.confirmEmail.valid}
                touched={this.state.confirmEmail.touched}
              />
              <ProgressButton
                text="Submit"
                disabled={!this.state.confirmEmail.valid || !this.state.email.valid}
                onPress={this.purchaseProduct}
              />
            </View>
          </View>
        )}
      </Modal>
    );
  }
}

export default SubmitTest;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  formBox: {
    height: 200,
    width: '100%',
    backgroundColor: '#66a5ad',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  note: {
    padding: 20,
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 70,
  },
});
