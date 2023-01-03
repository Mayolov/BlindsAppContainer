import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView, Button, Dimensions} from 'react-native';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_300Light,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import Toggle from "react-native-toggle-element";


  /*----connections to the blinds functionality----*/
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
  async function sleepMode(sleepAmount) {
    try {
      let response = await fetch(`${baseURI}/sleepMode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sleepAmount: sleepAmount,
        }),
      });
      
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  /*-----front end stuff---*/
  
  const Splasher = () =>{
  
    return(
      <View style={[styles.fullWidthAndHeight, styles.centerInside]}>
                  <Text>Page is Loading</Text>
                
       </View>
    )
  }
export default function App() {

  const [baseURIPre,setBaseURI] = useState('http://10.0.181:80');
  const [openingTime,setOpeningTime] = useState('');
  const [closingTime,setClosingTime] = useState('');
  const  [toggleValue,setToggleValue] = useState('closed')
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_300Light,
    Inter_600SemiBold,
  });
  
  if(!fontsLoaded){
    return (
      <Splasher />
    )

  }else {return (
  <SafeAreaView style={[styles.container,eval(`${toggleValue}Styles`).primaryBackground, styles.flex1]}>
    <View style={[styles.centerInside,{marginHorizontal: 30,}]}>
      <Text style={[styles.primaryFont, eval(`${toggleValue}Styles`).primaryFont]}>
       {`blinds ${toggleValue}`}
      </Text>
      <View style={[{marginVertical: 35}]}>
        <Toggle
          value={toggleValue === 'closed' ? false : true}
          onPress={(val) => setToggleValue(toggleValue === 'closed' ? 'open' : 'closed')}
          trackBar={{
            activeBackgroundColor: lightSecondary,
            inActiveBackgroundColor: darkSecondary,
            width: 80,
            height: 20,
          }}
          thumbButton={{
            activeBackgroundColor: compOrange,
            inActiveBackgroundColor: darkFont,
            opacity: .7,
            width: 40,
            height: 40,
          }}
        />
      </View>
     
    </View>
    

   
    
  
  


  </SafeAreaView>
  );}
}

const darkPrimary = "#333940";
const darkSecondary = "#43535b";
const lightPrimary =  "#fafafa";
const lightSecondary = "#c6d3d7";
const darkFont = '#ecf5fb';
const compOrange = "#f16102";
const compBlue = "#91bdd5";
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

const closedStyles = StyleSheet.create({
    primaryBackground: {
      backgroundColor: darkPrimary,
      
    },
    secondaryBackground: {
      backgroundColor: darkSecondary,
    },
    primaryFont:{
      color: darkFont,
    }
  })
const openStyles = StyleSheet.create({
    primaryBackground: {
      backgroundColor: lightPrimary,
    },
    secondaryBackground: {
      backgroundColor: lightPrimary,
    },
    primaryFont:{
      color: compOrange,
    }
  })




const styles = StyleSheet.create({
  fullWidthAndHeight:{
    width: fullWidth,
    height: fullHeight,
  },
  centerInside:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1:{
    flex: 1,
  },
  container: {
    display: 'flex',    
    top: "0%",
    flex: 1,
    justifyContent: "center",
    alignContent:"center",
  },
  primaryFont:{
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
    letterSpacing: 1.3,
  }

});

