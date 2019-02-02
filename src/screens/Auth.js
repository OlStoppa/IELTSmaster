import React from 'react';
import DefaultInput from '../components/UI/DefaultInput';
import MainText from '../components/UI/MainText';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';

class AuthScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };
    state = {
        value: ""
    }
    textChangeHandler = val => {
        this.setState({
            value: val
        }, () => {console.log(this.state)});
    }
    handleSubmit = () => {
        const token = {
            name: this.state.value,
            id: 1
            };
        const data = JSON.stringify(token);
        _storeData = async () => {
            try {
                await AsyncStorage.setItem('userToken', data);
            } catch (error) {
                console.log('error');
            }
        }

        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ImageBackground 
                source={{uri: "https://4.bp.blogspot.com/-gJmzke97eaI/WJRO6W2Z1RI/AAAAAAAAAKQ/hRxv5aOJzxoIPRdOeCTQg3ljFh8ykBc4QCLcB/s1600/ielts-examination.jpg"}}
                style={{
                    width: "100%",
                    flex: 1
            }}
                >
            <View style={styles.container}>
                <View style={styles.form}>
                <MainText>Choose a Username</MainText>
                <DefaultInput 
                    placeholder="username"
                    onChangeText={this.textChangeHandler}
                    />
                <Button title="Login" onPress={this.handleSubmit}/>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    form: {
        height: "50%",
        justifyContent: "space-evenly",
        width: "80%",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 10,
        opacity: .9
        


    }
});