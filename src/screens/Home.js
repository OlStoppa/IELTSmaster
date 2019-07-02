import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/UI/Header';
import Feedbox from '../components/UI/Feedbox';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { name } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Header style={{ height: 100 }}>Hi, {name}!</Header>
          <Text style={{ color: 'black', margin: 5 }}>What will you practice today?</Text>

          <View style={{ height: 290, marginBottom: 10 }}>
            <Feedbox
              handlePress={() => {
                this.props.navigation.navigate('Tests');
              }}
              mainText="Take a test"
              subText="You can get your band score"
              imageText="Practice Tests"
              footText="Just finish a test and submit it for grading!"
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg',
              }}
            />
          </View>
          <View style={{ height: 290, marginBottom: 10 }}>
            <Feedbox
              handlePress={() => {
                this.props.navigation.navigate('Lessons');
              }}
              mainText="Lessons"
              navigation={this.props.navigation}
              lessonData="true"
            />
          </View>
          <View style={{ height: 290, marginBottom: 10 }}>
            <Feedbox
              handlePress={() => {
                this.props.navigation.navigate('Examples');
              }}
              mainText="Review example answers"
              subText={"It's a great way to improve"}
              imageText="Example Answers"
              footText="Check out ideal answers!"
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9w-ajAN7bSgHYf1uWUYubAD3ZEayZKZeUZxHbt_poTzr43OMsA',
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 2,
  },
});
