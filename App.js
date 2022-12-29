import { StatusBar } from 'expo-status-bar';
import React,{useRef, useState} from 'react';
import {StyleSheet,Modal ,TextInput, Platform, Text, TouchableHighlight, Alert, View, Image, SafeAreaView, Button} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
 
let isOpen = true;
let hourOpen;
let minOpen;
let TimeInputOpen;
let hourClose;
let minClose;
let TimeInputClose;

// Get Local IP
// NetworkInfo.getIPAddress().then(ipAddress => {
//   console.log(ipAddress);
// });
// const ipAddress = NativeModules.IpAddressModule.getIpAddress();
// let myIpAddress = ipAddress;
// const ipAddress = NetworkInfo.getIPAddress();
// Get IPv4 IP (priority: WiFi first, cellular second)
//Home IP
//const baseURI = 'http://'+ '10.0.0.181'+':80';
// 7leaves IP 
const baseURI = 'http://'+ '192.168.7.158'+':80';

async function controlBlinds(command) {
  try {
    let response = await fetch(`${baseURI}/controlBlinds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        command: command,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function closeTime(blindsShutTime) {
  try {
    let response = await fetch(`${baseURI}/closeTime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blindsShutTime: blindsShutTime,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function openTime(blindsOpenTime) {
  try {
    let response = await fetch(`${baseURI}/openTime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blindsOpenTime: blindsOpenTime,
      }),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
  <SafeAreaView style={[styles.container,containerStyle]}>
    <SafeAreaView style = {styles.mainImage}>
    <Image source={require("./app/assets/favicon.png")}></Image>
    </SafeAreaView>
    <SafeAreaView>
    <Modal 
        styles = {styles.modal}  
        visible={showModal}
        animationType="slide">
      <TextInput
        selectionColor="#f00"
        styles={styles.input}
        onChangeText={text => setInputValue(text)}
        value={inputValue}/>
      <Button
        style={styles.button}
        onPress={() => setShowModal(false)}
        title="Close Modal"/>
        
    </Modal>
    </SafeAreaView>
    <SafeAreaView style = {styles.button}>
      <Button
          title="Instructions to Connect Device to WiFi"
          onPress={() => Alert.alert("Connect to the device wifi, the name should be 'GYAT-DAMN' then when you'll \
          be prompted to add your local networks password.","After thats done, please click input IP, and press press the button for the display to show the IP for your system and input all characters.", [
          {text:"input IP", onPress:()=>  setShowModal(true)},
          {text:"Cancel", onPress: ()=> console.log("set to false")}]) }/>
      
      </SafeAreaView>
    
    <SafeAreaView style = {styles.button}>
      <Button 
        title='Press to open'
        color={'darkgreen'}
        onPress={()=> controlBlinds('openBlinds')}></Button>
    </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Press to Close'
        color={'darkgreen'}
        onPress={()=> controlBlinds('closeBlinds')}></Button>
    </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Add Time Close'
        color={'darkgreen'}
        onPress={()=> closeTime('13:31')}></Button>
    </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Add Time Open'
        color={'darkgreen'}
        onPress={()=> openTime('1:1')
        // Alert.alert("Add when to Open blinds","Expected input should be [0-23:0-59] \
        // \nExample input 13:30 for 1:30 pm ", [
        // {text:"TimeInputClose", onPress:()=> console.log("set to true")},
        // {text:"Cancel", onPress: ()=> console.log("Cancel")}])
    
        }></Button>
    </SafeAreaView>
    
  </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "black"}

const styles = StyleSheet.create({
  container: {
    display: 'flex',    
    top: "0%",
    paddingBottom: 200 ,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-end",
    alignContent:"center"
  },

  button: {
    borderWidth: 4,
    borderColor: 'grey',
  }, 

  mainImage: {
    position: 'absolute',
    top: "30%",
    left: "50%",
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  buttonModal: {
    alignSelf: 'center',
  },

});

