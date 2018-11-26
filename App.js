/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import QRGenerator from './src/componentWillRender/QRGenerator'
import QRScanner from "./src/componentWillRender/QRScanner";
import {createSwitchNavigator} from 'react-navigation'
import { RootStack } from './src/navigators/stackNavigator';

export default class App extends Component {
  render() {
    return <SwitchNavigator/>
  }
}

const SwitchNavigator = createSwitchNavigator({
  Auth: RootStack


})
