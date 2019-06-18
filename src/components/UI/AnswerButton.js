import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import AudioRecord from 'react-native-audio-record';
import Permissions from 'react-native-permissions';
import StopButton from './StopButton';
import DeleteButton from './DeleteButton';
import PlayButton from './PlayButton';
import RecordButton from './RecordButton';

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.audioRecorderPlayer = new AudioRecorderPlayer();
  }

  options = {
    sampleRate: 16000, // default 44100
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 1, // android only (see below)
    wavFile: `test${this.props.testNumber}_${this.props.part}_question${this.props.index}.wav`,
  };

  state = {
    recording: false,
    recordingPath: '',
    playing: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this.permissionCheck();
  }

  componentWillUnmount() {
    this.isMounted = false;
    if (this.state.playing === true) {
      this.audioRecorderPlayer.stopPlayer().catch(() => {});
    }
    if (this.state.recording === true) {
      this.audioRecorderPlayer.stopRecorder();
    }
  }

  onStartRecord = async () => {
    AudioRecord.init(this.options);
    AudioRecord.start();
    this.setState({ recording: true });
  };

  onStopRecord = async () => {
    this._isMounted === true && this.setState({ recording: false });
    const result = await AudioRecord.stop();
    this.setState({ recordingPath: result });
    this.props.onAddAnswer(
      this.state.recordingPath,
      this.props.testNumber,
      this.props.index,
      this.props.part
    );
    console.log(result);
  };

  onStartPlay = async path => {
    console.log('onStartPlay');
    const playerPath = path.substring(6);
    this.audioRecorderPlayer.setVolume(1.0).catch(() => {});
    const msg = await this.audioRecorderPlayer.startPlayer(path).catch(() => {});
    this._isMounted && this.setState({ playing: true });
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener(e => {
      if (e.current_position === e.duration) {
        console.log('finished');
        this.audioRecorderPlayer.stopPlayer().catch(() => {});
        this._isMounted === true && this.setState({ playing: false });
      }
      //   this.setState({
      //     currentPositionSec: e.current_position,
      //     currentDurationSec: e.duration,
      //     playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      //     duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      //   });
    });
  };

  permissionCheck = async () => {
    const micPermission = await Permissions.check('microphone');
    console.log('micPermission', micPermission);
    if (micPermission !== 'authorized') {
      const micRequest = await Permissions.request('microphone');
      console.log('micRequest', micRequest);
      if (micRequest !== 'authorized') {
        return;
      }
    }
    const storagePermission = await Permissions.check('storage');
    if (storagePermission !== 'authorized') {
      const storageRequest = await Permissions.request('storage');
      if (storageRequest !== 'authorized') {
      }
    }
  };

  render() {
    const { index, answerPath, testNumber, part } = this.props;

    if (this.props.answerPath) {
      return (
        <View style={{ alignItems: 'center', height: '100%', padding: 50 }}>
          <Text style={styles.answerText}>Play your answer or delete to try again</Text>
          <View style={styles.playView}>
            {this.state.playing ? (
              <StopButton
                onStopRecord={() => {
                  this.audioRecorderPlayer.stopPlayer().catch(() => {});
                  if (this._isMounted === true) {
                    this.setState({ playing: false });
                  }
                }}
              />
            ) : (
              <PlayButton onQuestionPlay={() => this.onStartPlay(answerPath)} />
            )}
          </View>
          <View>
            <DeleteButton
              onDeleteAnswer={() => {
                this.props.onDeleteAnswer(index, testNumber, part);
                if (this.state.playing) {
                  this.audioRecorderPlayer.stopPlayer().catch(() => {});
                }
              }}
            />
          </View>
        </View>
      );
    }
    return this.state.recording ? (
      <StopButton onStopRecord={this.onStopRecord} />
    ) : (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.answerText}>Record your answer</Text>
        <RecordButton onRecord={this.onStartRecord} />
      </View>
    );
  }
}

export default AnswerButton;

const styles = StyleSheet.create({
  answerText: {
    color: 'white',
    paddingBottom: 50,
  },
  playView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
