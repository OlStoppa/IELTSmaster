import React from 'react';
import { Modal, View, Text, StyleSheet, ScrollView } from 'react-native';
import AnswerTextBlock from '../components/UI/AnswerTextBlock';
import TextLink from '../components/UI/TextLink';
import testData from '../fixtures/testData';
import testAnswersData from '../fixtures/testAnswersData';
import DictionaryModal from '../components/components/DictionaryModal';

class AnswersScreen extends React.Component {
  state = {
    modalVisible: false,
    selectedWord: '',
  };

  setModalVisible = (word = '') => {
    this.setState(prevState => ({ modalVisible: !prevState.modalVisible, selectedWord: word }));
  };

  contentMapper = () => {
    const { part, testNum } = this.props.navigation.state.params;

    let content = [];
    if (part === 1 || part === 3) {
      content = testData[testNum][part].map((question, index) => {
        return (
          <View key={index}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{question}</Text>
            </View>
            <AnswerTextBlock>
              {testAnswersData[testNum][part][index].map(answer => {
                if (typeof answer === 'object') {
                  return (
                    <TextLink key={index} onPress={() => this.setModalVisible(answer.link)}>
                      {answer.link}
                    </TextLink>
                  );
                }
                return answer;
              })}
            </AnswerTextBlock>
          </View>
        );
      });
      return content;
    }
    return (
      <View>
        {testData[testNum][`sec${part}`].map(line => {
          return (<Text>{line}</Text>);
        })}
        <AnswerTextBlock>
          {testAnswersData[testNum][part].map(answer => {
            if (typeof answer === 'object') {
              return (
                <TextLink onPress={() => this.setModalVisible(answer.link)}>{answer.link}</TextLink>
              );
            }
            return answer;
          })}
        </AnswerTextBlock>
      </View>
    );
  };

  render() {
    const questions = this.contentMapper();
    return (
      <ScrollView>
        <View>{questions}</View>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          transparent
        >
          <DictionaryModal
            setModalVisible={this.setModalVisible}
            selectedWord={this.state.selectedWord}
          />
        </Modal>
      </ScrollView>
    );
  }
}

export default AnswersScreen;
