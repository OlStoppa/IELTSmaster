import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DictionaryModal = props => (
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
          <Text style={{ fontSize: 40 }}>{props.selectedWord}</Text>
        </View>
        <View style={{ height: '50%' }}>
          <Text style={{ fontSize: 35 }}>A whale{"'"}s vagina</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default DictionaryModal;
