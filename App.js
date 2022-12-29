import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, TouchableHighlight, Alert, View, Image, SafeAreaView, Button} from 'react-native';
 
//Home IP
// const baseURI = 'http://'+ '10.0.0.181'+':80';
// 7leaves IP 
// const baseURI = 'http://'+ '192.168.7.158'+':80';



export default function App() {

  const [baseURIPre,setBaseURI] = useState('');
  const [openingTime,setOpeningTime] = useState('');
  const [closingTime,setClosingTime] = useState('');


  const baseURI = 'http://'+ baseURIPre +':80';

  const handleIP = () => {
    Alert.alert(
      'Input',
      baseURIPre,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        }
      ],
      { cancelable: false }
    );
  };

  const handleOpenTime = () => {
    Alert.alert(
      'Input',
      openingTime,
      [
        {
          text: 'OK',
          onPress: () => openTime(openingTime)
        }
      ],
      { cancelable: false }
    );
  };

  const handleClosingTime = () => {
    Alert.alert(
      'Input',
      closingTime,
      [
        {
          text: 'OK',
          onPress: () => closeTime(closingTime)
        }
      ],
      { cancelable: false }
    );
  };

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
  return (
  <SafeAreaView style={[styles.container,containerStyle]}>
    <View style = {styles.mainImage}>
    <Image source={require("./app/assets/favicon.png")}></Image>
    </View>

    <View style = {styles.button}>
      <TextInput
          value={baseURIPre}
          backgroundColor = {"white"}
          onChangeText={text =>setBaseURI(text)}/>
      <Button onPress={handleIP} title="Input IP" />
    </View>
    
    <View style = {styles.button}>
      <Button 
        title='Press to open'
        color={'darkgreen'}
        onPress={()=> controlBlinds('openBlinds')}></Button>
    </View>

    <View style = {styles.button}>
      <Button 
        title='Press to Close'
        color={'darkgreen'}
        onPress={()=> controlBlinds('closeBlinds')}></Button>
    </View>

    <View style = {styles.button}>

    <View style = {styles.button}>
      <TextInput
          value={closingTime}
          backgroundColor = {"white"}
          onChangeText={text =>setClosingTime(text)}/>
      <Button onPress={handleClosingTime} title="Input close time HH:MM or H:M in 24-hour-time" />
    </View>
    </View>

    <View style = {styles.button}>
    
    <View style = {styles.button}>
      <TextInput
          value={openingTime}
          backgroundColor = {"white"}
          onChangeText={text =>setOpeningTime(text)}/>
      <Button onPress={handleOpenTime} title="Input open time HH:MM or H:M in 24-hour-time" />
      </View>
    </View>
    <Text  style={{color: 'red'}}>Ip is: {baseURIPre}</Text>
    <Text style={{color: 'red'}}>Blinds open set to {openingTime}</Text>
    <Text style={{color: 'red'}}>Blinds open set to {closingTime}</Text>


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
  input: {
    color: 'white'
  },
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'white'
  },

});

