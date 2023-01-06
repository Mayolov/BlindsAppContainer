import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView,  Dimensions, TouchableOpacity} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';
import { Button } from '@rneui/themed';





const Settings = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, setBaseURI} = GlobalState;
const [tempURI, setTempURI] = useState(null)
const [sleepMode, setSleepMode] = useState(false)
const openStyle = openStyles;
const closedStyle = closedStyles;

  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
      <Text style={[localStyle.subPageHeader, globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       settings
      </Text>
      <View style={[ localStyle.settingsItemContainer]}> 
        <Text style={[localStyle.fieldlabel, globalStyle.labelFont, eval(`local${toggleValue}`).fieldlabel]}>Current IP:</Text>
        <View style={[localStyle.tbComboField, localStyle.fieldShadow]}>
          <TextInput 
            style={[localStyle.tbTextInput]}
            placeholder={baseURI}
            value={tempURI}
            onChangeText={setTempURI}
            />
          <TouchableOpacity style={[localStyle.tbButton, eval(`local${toggleValue}`).tbButton]}>
            <Text style={[localStyle.tbButtonText]}>
                  save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[ localStyle.settingsItemContainer]}> 
        <Text style={[localStyle.fieldlabel, globalStyle.labelFont,eval(`local${toggleValue}`).fieldlabel]}>Sleep Mode:</Text>
        
          <Button
            buttonStyle={[localStyle.fullButton, localStyle.fieldShadow, eval(`local${toggleValue}`).fullButton]}
           titleStyle= {[localStyle.fullButtonTitle]}
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
const localclosed = StyleSheet.create({
  tbButton:{
    backgroundColor: defaultConsts.darkPrimary,
    opacity: .7
  },
  fullButton:{
    borderColor: defaultConsts.lightPrimary,
    backgroundColor: defaultConsts.darkPrimary,
    opacity: .7,
  },
  fieldlabel:{
    color: defaultConsts.lightPrimary,
  },

})
const localopen = StyleSheet.create({
  tbButton:{
    backgroundColor: defaultConsts.compOrange,

  },
  fullButton:{
    borderColor: defaultConsts.lightPrimary,
    backgroundColor: defaultConsts.compOrange,
  },
  fieldlabel:{
    color: defaultConsts.darkPrimary,
    opacity: .4
  },
})
const localStyle = StyleSheet.create({
    backgroundFiller:{
      backgroundColor: 'pink',
    },
    subPageHeader:{
      marginBottom:5,
    },
    settingsItemContainer:{
      width: '100%',
      marginTop: 25,
      
    },
    fieldlabel:{
      fontSize: 14,
      marginBottom: 15,
      color: defaultConsts.lightPrimary,
      marginLeft: 2,
    },
    tbComboField:{
      backgroundColor: '#ffffff',
      width: '100%',
      height: 45,
      paddingHorizontal: 10,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 5,
      justifyContent: 'space-between'
    },
    tbComboBtnwrap:{
      paddingHorizontal: 0,
    },
    tbTextInput:{
      width: '80%',
      fontFamily: defaultConsts.regularFont,
      color: defaultConsts.darkPrimary,
      opacity: .8
    },
    tbButton:{
      width: '20%',
      padding: 5,
      borderRadius: 3,
      
    },
    tbButtonText:{
      textAlign: 'center',
      color: defaultConsts.lightPrimary,
      fontFamily: defaultConsts.semiBoldFont,
      fontSize: 13
    },
    fullButton:{
      width: '100%',
      height: 42,
      margin: 0,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      
    },
    fullButtonTitle:{
      fontSize: 14,
      fontFamily: defaultConsts.semiBoldFont,
    }, 
    fieldShadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
    }

})
