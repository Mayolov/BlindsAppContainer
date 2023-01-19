import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView,  Dimensions, TouchableOpacity} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';
import { Button } from '@rneui/themed';





const Settings = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, setBaseURI, locUI, saveIp} = GlobalState;
const [tempURI, setTempURI] = useState(baseURI)
const [sleepMode, setSleepMode] = useState(false)
const openStyle = openStyles;
const closedStyle = closedStyles;

  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
      <Text style={[globalStyle.subPageHeader, globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       settings
      </Text>
      <View style={[ globalStyle.settingsItemContainer]}> 
        <Text style={[globalStyle.fieldlabel, globalStyle.labelFont, eval(`${toggleValue}Style`).fieldlabel]}>Current IP:</Text>
        <View style={[globalStyle.tbComboField, globalStyle.fieldShadow]}>
          <TextInput 
            style={[globalStyle.tbTextInput]}
            placeholder={locUI+' (current network)'}
            value={tempURI}
            onChangeText={setTempURI}
            />
          <TouchableOpacity onPress={()=>saveIp(tempURI)} style={[globalStyle.tbButton, eval(`${toggleValue}Style`).tbButton]}>
            <Text style={[globalStyle.tbButtonTextFont]}>
                  save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[ globalStyle.settingsItemContainer]}> 
        <Text style={[globalStyle.fieldlabel, globalStyle.labelFont,eval(`${toggleValue}Style`).fieldlabel]}>Sleep Mode:</Text>
        
          <Button
            buttonStyle={[globalStyle.fullButton, globalStyle.fieldShadow, eval(`${toggleValue}Style`).fullButton]}
           titleStyle= {[globalStyle.fullButtonTitleFont]}
            linearGradientProps={null}
            onPress={() => {sleepMode ? setSleepMode(false) : setSleepMode(true)}}
            title={`turn ${sleepMode ? "off": "on" }`}
         
          />
  
      </View>
   
     
    </View>
    
  </SafeAreaView>
    ) 
}

export default Settings;

