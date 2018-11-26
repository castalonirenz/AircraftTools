import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { Component } from "react";

const CustomizeButton = props => (
  <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
    <Text style={[{ color: "white" }, props.textColor, props.textWeight]}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF5A5F",
    borderWidth: 1,
    borderColor: "#FF5A5F",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CustomizeButton;