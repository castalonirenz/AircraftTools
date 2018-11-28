import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import RF from 'react-native-responsive-fontsize';
const CustomizeButton = props => (
  <TouchableOpacity style={[styles.button, props.buttonStyle]} onPress={props.onPress}>
    <Text style={[styles.text, props.textStyle]}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    
    height: RF(10),
    borderRadius: RF(20),
    backgroundColor: "#FF5A5F",
    borderWidth: 1,
    borderColor: "#FF5A5F",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    color:"white"
  }
});

export default CustomizeButton;