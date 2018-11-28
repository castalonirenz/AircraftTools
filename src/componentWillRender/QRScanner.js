import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Button,
  View
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

class ScanScreen extends Component {
  state = {
    qrData: null,
    QR: false,
    trigger: false
  };

  getData = () => {
    this.setState({
        QR: false
    })
  };
  onSuccess(e) {
    this.state.qrData = e.data;
    alert(this.state.qrData);
  
   

    // Linking
    //     .openURL(e.data)
    //     .catch(err => console.error('An error occured', err));
  }

  enableQr = () => {
    this.setState({
      QR: true
    });
  };

  render() {
    let QRScanner;
    let TriggerButton;
    if(this.state.QR) {
        QRScanner = (
            <QRCodeScanner
            reactivate={true}
              showMarker={true}
              onRead={this.onSuccess.bind(this)}
              topContent={
                <Text style={styles.centerText}>
                  Start Scanning your QR Code
                
                </Text>
              }
              bottomContent={
                <View>
                  <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                  </TouchableOpacity>
    
                  <Button title="Get Data" onPress={this.getData} />
                </View>
              }
            />
         )
    }
    else{
        TriggerButton=(
            <Button title="Start Scanning" onPress={this.enableQr} />
        )
    }

    return (
      <View style={styles.container}>
        {TriggerButton}
        {QRScanner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "black"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ScanScreen;
