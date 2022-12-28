import { StatusBar } from 'expo-status-bar';
import React,{useRef, useState} from 'react';
import {StyleSheet,NativeModules,Modal,Linking ,TextInput, Platform, Text, TouchableHighlight, Alert, View, Image, SafeAreaView, Button} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';
import { NetworkInfo } from "react-native-network-info";
 
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
const baseURI = 'http://'+ '10.0.0.181'+':80';

async function sendCommand(command) {
  try {
    let response = await fetch(`${baseURI}/${command}`);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function closeTime(blindsCloseTime) {
  try {
    let response = await fetch(`${baseURI}/closeTime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blindsCloseTime: blindsCloseTime,
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

const blindsOpen = () => {
  if(isOpen == false){
    isOpen = true;
    console.log(isOpen)
    // Then activate the function to send the json/bits to open the blinds
  }
  else{
    console.log("They are already open")
  }
};

const blindsClose = () => {
  if(isOpen == true){
    isOpen = false;
    console.log(isOpen)
    // Then activate the function to send the json/bits to close the blinds
  }
  else{
    console.log("They are already closed")
  }
};

export default function App() {
  return (
  <SafeAreaView style={[styles.container,containerStyle]}>
    <SafeAreaView style = {styles.mainImage}>
    <Image source={require("./app/assets/favicon.png")}></Image>

    </SafeAreaView>
    <SafeAreaView style = {styles.button}>
    <Button
        title="Instructions to Connect Device to WiFi"
        onPress={() => // Get Local IP
// Get Local IP
NetworkInfo.getIPAddress().then(ipAddress => {
  console.log(JSON.stringify(ipAddress));
})}/>
      </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Press to open'
        color={'darkgreen'}
        onPress={()=>
        Alert.alert("Do you want to see the light?","", [
        {text:"yes", onPress:()=> {blindsOpen(),console.log("set to true")}},
        {text:"no", onPress: ()=> console.log("set to false")}])}></Button>
    </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Press to Close'
        color={'darkgreen'}
        onPress={()=>
        Alert.alert("Go back into the darkness?","", [
        {text:"yes", onPress:()=> {blindsClose(),console.log("set to false")}},
        {text:"no", onPress: ()=> console.log("set to true")}])}></Button>
    </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Add Time Close'
        color={'darkgreen'}
        onPress={()=>
        Alert.alert("Add when to close blinds","Expected input should be [0-23:0-59] \
        \nExample input 7:5 for 7:09 am ", [
        {text:"TimeInputClose", onPress:()=> console.log("send json information to be parsed")},
        {text:"Cancel", onPress: ()=> console.log("cancel")}])}></Button>
    </SafeAreaView>

    <SafeAreaView style = {styles.button}>
      <Button 
        title='Add Time Open'
        color={'darkgreen'}
        onPress={()=> openTime('11:11')
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
});
