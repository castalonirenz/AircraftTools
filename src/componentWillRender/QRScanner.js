import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Button,
    View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {

    state={
        qrData: null
    }

    getData = () => {
        alert(this.state.qrData)
    }
    onSuccess(e) {
        alert("QR SUCCESS")
        this.state.qrData = e.data
      
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occured', err));
    }

    // onSuccess = (e) =>{
    //     this.state.qrData = e

    // }

    render() {
        return (
            <QRCodeScannerr
                showMarker={true}
                onRead={this.onSuccess.bind(this)}
                topContent={
                    <Text style={styles.centerText}>
                        Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
                }
                bottomContent={
                    <View>
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>

                    <Button title="Get Data" onPress={this.getData}></Button>
                    </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});

export default ScanScreen;