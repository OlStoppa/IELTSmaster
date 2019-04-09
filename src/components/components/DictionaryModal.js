import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dictionary from '../../fixtures/dictionary';

const DictionaryModal = props => {
  const { selectedWord } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        props.setModalVisible();
      }}
    >
      <View style={{ height: '100%', justifyContent: 'center', backgroundColor: '#00000080' }}>
        <View
          style={{
            height: 300,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>
              {dictionary[selectedWord].print ? dictionary[selectedWord].print : selectedWord}
            </Text>
          </View>
          <View
            style={{ height: '50%', padding: 20, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 28 }}>{dictionary[selectedWord].definition}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DictionaryModal;
