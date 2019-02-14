import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import StopButton from './StopButton';
import DeleteButton from './DeleteButton';
import PlayButton from './PlayButton';
import RecordButton from './RecordButton';

class AnswerButton extends React.Component { 
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
            recordingPath: result
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
        this.setState({ recording: false });
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
                this.audioRecorderPlayer.stopPlayer().catch(() => { });
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
    render() {

        if (this.props.answerPath) {
            return (
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.answerText}>Play your answer or delete to try again</Text>
                    <DeleteButton
                        onDeleteAnswer={() => { this.props.onDeleteAnswer(this.props.index) }}
                    />
                    <PlayButton
                        onQuestionPlay={() => this.onStartPlay(this.props.answerPath)}
                    />

                </View>
            );
        } else {
            return (
                this.state.recording ?
                    <StopButton onStopRecord={this.onStopRecord} />
                    
                    :
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.answerText}>Record your answer</Text>
                        <RecordButton
                            onRecord={this.onStartRecord}
                        />
                    </View>

            );
        }
    }

}

export default AnswerButton;

const styles = StyleSheet.create({

    answerText: {
        color: "white"
    }
});

