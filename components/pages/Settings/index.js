import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView, Button, Dimensions, TouchableOpacity} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';






const Settings = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, setBaseURI} = GlobalState;
const {tempURI, setTempURI} = useState(null)
const openStyle = openStyles;
const closedStyle = closedStyles;

  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
      <Text style={[globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       settings
      </Text>
      <View style={[ localStyle.settingsItemContainer]}> 
        <Text style={[localStyle.fieldlabel, globalStyle.labelFont]}>Current IP:</Text>
        <View style={[localStyle.tbComboField]}>
          <TextInput 
            style={[localStyle.tbTextInput]}
            placeholder={baseURI}
            value={tempURI}
            onChangeText={setTempURI}
            />
          <TouchableOpacity style={[localStyle.tbButton]}>
            <Text style={[localStyle.tbButtonText]}>
                  save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[ localStyle.settingsItemContainer]}> 
        <Text style={[localStyle.fieldlabel, globalStyle.labelFont]}>Sleep Mode:</Text>
        <View style={[localStyle.tbComboField, localStyle.tbComboBtnwrap]}>
         
          <TouchableOpacity style={[localStyle.fullButton]}>
            <Text style={[localStyle.fullButtonText]}>
                  switch on
            </Text>
          </TouchableOpacity>
        </View>
      </View>
   
     
    </View>
    
  </SafeAreaView>
    ) 
}

export default Settings;

const localStyle = StyleSheet.create({
    backgroundFiller:{
      backgroundColor: 'pink',
    },
    settingsItemContainer:{
      padding: 10,
      width: '100%',
      marginTop: 10,
    },
    fieldlabel:{
      fontSize: 14,
      marginBottom: 10,
      color: defaultConsts.lightPrimary,
    },
    tbComboField:{
      backgroundColor: '#ffffff',
      width: '100%',
      height: 40,
      paddingHorizontal: 5,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
      justifyContent: 'space-between'
    },
    tbComboBtnwrap:{
      paddingHorizontal: 0,
    },
    tbTextInput:{
      width: '80%',
    },
    tbButton:{
      width: '20%',
      padding: 5,
      borderRadius: 3,
      backgroundColor: defaultConsts.darkPrimary,
      opacity: .7

    },
    tbButtonText:{
      textAlign: 'center',
      color: defaultConsts.lightPrimary
    },
    fullButton:{
      width: '100%',
      height: '100%',
      margin: 0,
      alignItems: 'center',
      backgroundColor: defaultConsts.darkPrimary,
      opacity: .7
    },
    fullButtonText:{
      textAlign: 'center',
      color: defaultConsts.lightPrimary
    }

})
