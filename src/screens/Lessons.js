import React from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';





class LessonsScreen extends React.Component {
    constructor(props){
        super(props);
        this.audioRecorderPlayer = new AudioRecorderPlayer();
    }
    

onStartRecord = async () => {
  const result = await this.audioRecorderPlayer.startRecorder('sdcard/q1.mp4');
  this._storeData(result)
//   this.audioRecorderPlayer.addRecordBackListener((e) => {
//     this.setState({
//       recordSecs: e.current_position,
//       recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
//     });
//     return;
//   });
  console.log(result);
}

onStopRecord = async () => {
  const result = await this.audioRecorderPlayer.stopRecorder();
//   this.audioRecorderPlayer.removeRecordBackListener();
//   this.setState({
//     recordSecs: 0,
//   });
//   console.log(result);
}
_storeData = async (data) => {
    try {
        await AsyncStorage.setItem('q1', data);
    } catch (error) {
        console.log('error');
    }
}
onStartPlay = async (path) => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer(path);
    console.log(msg);
}
    

    

    render() {
        
        const data =  AsyncStorage.getItem('q1'); 
        const but = data ? <Button title="start" onPress={
            this.onStartRecord
           
         } />: <Button title="play" onPress={(data) => {this.onStartPlay(data)}} />;
        return (
            <View >
                <Text>Lessons go here</Text>
                {but}
                <Button title="stop" onPress={this.onStopRecord} />
               
            </View>
        );
    }
}

export default LessonsScreen;
