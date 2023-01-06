import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView, Button, Dimensions} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';





const Schedule = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, setBaseURI} = GlobalState;
const openStyle = openStyles;
const closedStyle = closedStyles;

  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
      <Text style={[globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       schedule
      </Text>
 
      
   
     
    </View>
    
  </SafeAreaView>
    ) 
}

export default Schedule;

const localStyle = StyleSheet.create({

})