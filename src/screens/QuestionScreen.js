import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PlayButton from '../components/UI/PlayButton';
import RecordButton from '../components/UI/RecordButton';
import MainText from '../components/UI/MainText';
import Sound from 'react-native-sound';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import StopButton from '../components/UI/StopButton';


class QuestionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.audioRecorderPlayer = new AudioRecorderPlayer();
    }
    state = {
        recording: false,
        recordingPath: ''
    }

    onStartRecord = async () => {
        const result = await this.audioRecorderPlayer.startRecorder(`sdcard/question${this.props.index}.mp4`);
        this.setState({
            recording: true,
            recordingPath: result,
            haveRecPath: false
        });
      //   this._storeData(result)
        this.audioRecorderPlayer.addRecordBackListener((e) => {
          // this.setState({
          //   recordSecs: e.current_position,
          //   recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
          // });
          return;
        });
        console.log(result);
      }

      onStopRecord = async () => {
        const result = await this.audioRecorderPlayer.stopRecorder();
      //   this.audioRecorderPlayer.removeRecordBackListener();
      //   this.setState({
      //     recordSecs: 0,
      //   });
        this.setState({recording: false});
        this.props.onAddAnswer(this.state.recordingPath, this.props.index)
        console.log(result);
      }

      onStartPlay = async (path) => {
        console.log('onStartPlay');
        const playerPath = path.substring(6);
        const msg = await this.audioRecorderPlayer.startPlayer(playerPath);
        console.log(msg);
        this.audioRecorderPlayer.addPlayBackListener((e) => {
          if (e.current_position === e.duration) {
            console.log('finished');
            this.audioRecorderPlayer.stopPlayer().catch(()=>{});
          }
        //   this.setState({
        //     currentPositionSec: e.current_position,
        //     currentDurationSec: e.duration,
        //     playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
        //     duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        //   });
          return;
        });
      }

       buttonDisplayHandler = () => {
           if(this.props.answerPath){
               return (
                   <PlayButton
                    onQuestionPlay={() =>this.onStartPlay(this.props.answerPath)}
                     />
               );
           }else{
               return (
                this.state.recording ? 
                <StopButton onStopRecord={this.onStopRecord}/>
                :         
                <RecordButton 
                    onRecord={this.onStartRecord}
                />
               );
           }
       }


    render (){
        const sound = new Sound(this.props.audio, Sound.MAIN_BUNDLE);
        const button = this.buttonDisplayHandler();

        return (
            <View style={styles.container}>
            <MainText>Question {this.props.index + 1}</MainText>
                <Text>Listen to the question</Text>
                <PlayButton 
                    onQuestionPlay={()=>{sound.play()}}
                />
                {
                   button 
                }
                

            </View>
        );    
    }
}

export default QuestionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#c4dfe6",
        paddingBottom: "10%"
    },

   
    
});


