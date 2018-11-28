import React, { Component } from "react";

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Button,
  View
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import MyButton from '../components/button'

class ScanScreen extends Component {
  state = {
    qrData: null,
    QR: false,
    trigger: false
  };

  closeQR = () => {
    this.setState({
      QR: false
    });
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
    if (this.state.QR) {
      QRScanner = (
        <QRCodeScanner
        //   cameraStyle={{ height: 250, width: 250 }}
          reactivate={true}
          showMarker={true}
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>Start Scanning your QR Code</Text>
          }
          bottomContent={
            <View style={styles.buttomComponent}>
                <MyButton onPress={this.closeQR}>
                    Close QR Scanner
                </MyButton>
            </View>
          }
        />
      );
    } else {
      TriggerButton = (
        <View style={styles.QRLogoWrapper}>
          <TouchableOpacity onPress={this.enableQr}>
            <Image
              style={styles.imageDesign}
              source={require("../assets/250th.png")}
            />
          </TouchableOpacity>
          <Text
            style={[styles.textBold, { fontWeight: "normal", fontSize: 25 }]}
          >
            Start Scanning
          </Text>
        </View>
      );
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
  imageDesign: {
    height: 300,
    width: 300
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
  },
  QRLogoWrapper: {
    alignItems: "center"
  },
  buttomComponent:{
      width:"100%"
  }
});

export default ScanScreen;
