import {  createBottomTabNavigator } from "react-navigation";
import ScanScreen from "../componentWillRender/QRScanner";
import GeneratorScreen from "../componentWillRender/QRGenerator";
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { Component } from "react";
export const myTab = createBottomTabNavigator({
    QRScanner:{
        screen: ScanScreen,
        navigationOptions:{
            tabBarLabel: "QR Scanner",

        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="qrcode"
            color={tintColor}
            size={30}
          />
        )
        }
    },
    QRGenerator:{
        screen: GeneratorScreen,
        navigationOptions:{
          tabBarLabel: "QR Generator",

      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="print"
          color={tintColor}
          size={30}
        />
      )
      }
    }
},
{
  initialRouteName: "QRScanner",
  tabBarPosition: "bottom",
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: "orange",
    inactiveTintColor: "grey",
    style: {
      backgroundColor: "#f2f2f2",
      borderTopWidth: 0.5,
      borderTopColor: "grey",
      height: 60
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true
  }
})