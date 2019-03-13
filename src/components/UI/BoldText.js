import React from 'react';
import {Text} from 'react-native';

const BoldText = (props) => (
    <Text style={[{fontSize:18, fontWeight:"bold"}, props.style]}>{props.children}</Text>
);


export default BoldText;