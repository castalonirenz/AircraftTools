import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { globalStyle } from "../themes/globalStyle";
import CustomButton from "../components/button";
class loginScreen extends Component {

    static navigationOptions = {
        header: null
    }
    state = {
        username: '',
        pass: ''
    }

    emailInput = (text) => {

        this.setState({
            username: text
        })
    }

    passInput = (text) => {
        this.setState({
            pass: text

        })
    }

    render() {
        return (

            <View style={globalStyle.container}>
                
                <View>
                <Image 
                style={styles.logoStyle}
                source={require('../assets/logo.png')}/>

               
                </View>

                <KeyboardAvoidingView style={styles.textInputWrapper}>
                    <TextInput
                        style={globalStyle.textInput}
                        onChangeText={text => this.emailInput(text)}
                        value={this.state.username}
                        placeholder="Username"
                        underlineColorAndroid="transparent"
                    />




                    <TextInput
                        style={globalStyle.textInput}
                        onChangeText={text => this.passInput(text)}
                        value={this.state.pass}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />

                </KeyboardAvoidingView>
                
                <View style={styles.buttonWrapper}>
                    <CustomButton onPress={() => alert(this.state.username)}>Login</CustomButton>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        width: "100%",
      //  backgroundColor: "yellow",
        alignItems: 'center',
    },
    textInputWrapper: {
        flex: 1,
        width: "100%",
     //   backgroundColor: "green",
        alignItems: 'center',
        justifyContent: "center"
    },
    logoStyle:{
        minHeight: 200,
        minWidth: 200
    }
})

export default loginScreen;
