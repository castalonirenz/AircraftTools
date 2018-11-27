import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from "react-native";
import { globalStyle } from "../themes/globalStyle";
import CustomButton from "../components/button";
import RF from "react-native-responsive-fontsize";
class loginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    username: "",
    pass: ""
  };

  emailInput = text => {
    this.setState({
      username: text
    });
  };

  passInput = text => {
    this.setState({
      pass: text
    });
  };

  render() {
    return (
     
        <View style={globalStyle.container}>
         <ScrollView>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.logoStyle}
              source={require("../assets/logo.png")}
            />
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
            <CustomButton
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonText}>
              Login
            </CustomButton>
          </View>
           </ScrollView>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: RF(5),
  },
  buttonText:{
    fontSize: RF(2.5),
    color:"#1f2820"
  },
  buttonStyle:{
    backgroundColor:"#81d18d",
    borderColor: "#a1ada3",
  },
  textInputWrapper: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  logoStyle: {
    minHeight: RF(25),
    minWidth: RF(25),
  },
  text: {
    fontSize: RF(1),
    color: "white"
  },
  imageWrapper:{
      alignItems:"center"
  }
});

export default loginScreen;
