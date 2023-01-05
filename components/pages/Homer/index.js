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
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import Splasher from '../../parts/Splasher';





const Homer = ({GlobalState}) =>{

const {toggleValue, setToggleValue} = GlobalState;

const [baseURIPre,setBaseURI] = useState('http://10.0.181:80');
//   const [openingTime,setOpeningTime] = useState('');
//   const [closingTime,setClosingTime] = useState('');
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_300Light,
    Inter_600SemiBold,
  });
  
  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();
  if(!fontsLoaded){
    return (
      <Splasher />
    )

  }else {
    return (
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

export default Homer;

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

