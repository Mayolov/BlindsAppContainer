import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView, Button, Dimensions} from 'react-native';

import Toggle from "react-native-toggle-element";
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';




const Homer = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, saveToggle} = GlobalState;


const openStyle = openStyles;
const closedStyle = closedStyles;

  
  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
      <Text style={[globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       {`blinds ${toggleValue}`}
      </Text>
      <View style={[{marginVertical: 35}]}>
        <Toggle
          value={toggleValue === 'closed' ? false : true}
          onPress={(val) => saveToggle(toggleValue === 'closed' ? 'open' : 'closed')}
          trackBar={{
            activeBackgroundColor: defaultConsts.lightSecondary,
            inActiveBackgroundColor: defaultConsts.darkSecondary,
            width: 80,
            height: 20,
          }}
          thumbButton={{
            activeBackgroundColor: defaultConsts.compOrange,
            inActiveBackgroundColor: defaultConsts.darkFont,
            opacity: .7,
            width: 40,
            height: 40,
          }}
        />
      </View>
   
     
    </View>
    
  </SafeAreaView>
  );
}

export default Homer;
