import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image,TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';
import { Button, Card } from '@rneui/base';
import Toggle from "react-native-toggle-element";
import { MaterialIcons, Feather } from '@expo/vector-icons';




const Schedule = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, setBaseURI} = GlobalState;

const openStyle = openStyles;
const closedStyle = closedStyles;
const [choice, setChoice] = useState('closed')

  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
    <Text style={[globalStyle.subPageHeader, globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       schedule
      </Text>
 
     <View style={[globalStyle.settingsItemContainer]}>
        <View style={[globalStyle.tbComboField, globalStyle.fieldShadow, eval(`${choice}Local`).scheduleForm]}>
            <View style={[{ justifyContent: 'center'}]}>
            <Toggle
          value={choice === 'closed' ? false : true}
          onPress={(val) => setChoice(choice === 'closed' ? 'open' : 'closed')}
          trackBar={{
            activeBackgroundColor: defaultConsts.lightSecondary,
            inActiveBackgroundColor: defaultConsts.darkSecondary,
            width: 40,
            height: 10,
          }}
          thumbButton={{
            activeBackgroundColor: defaultConsts.compOrange,
            inActiveBackgroundColor: defaultConsts.darkFont,
            opacity: .7,
            width: 20,
            height: 20,
          }}
        />
            </View>
            <TouchableOpacity >
              <Text style={[ eval(`${choice}Style`).fieldlabel,{opacity: .8, textDecorationLine:"underline"}]}>choose date & time</Text>
          </TouchableOpacity>
           
            <TouchableOpacity style={[globalStyle.tbButton, eval(`${choice}Local`).saveScheduleButton]}>
            <Text style={[localStyle.saveScheduleButtonTextFont, eval(`${choice}Local`).saveScheduleButtonText]}>
                  save
            </Text>
          </TouchableOpacity>
           

          </View>
        
        </View>
      
      {
        fakeData.sort((a, b) => a.time -b.time).map(item => {
          
          const utcDate = new Date(item.time*1000)
          const milliseconds = Date.UTC(
            utcDate.getFullYear(),
            utcDate.getMonth(),
            utcDate.getDate(),
            utcDate.getHours(),
            utcDate.getMinutes(),
            utcDate.getSeconds(),
          );
          const localTime = new Date(milliseconds);

          const options = {  weekday: 'short',  month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
          const fullDateItem = localTime.toLocaleDateString("en-US", options)
          const otherDateItem = utcDate.toLocaleDateString("en-US", options)
          const status = item.oc === "closed" ? "close" :"open";
          return (
            <View style={[globalStyle.settingsItemContainer,{marginBottom:15}]}>
              <View style={[globalStyle.tbComboField,eval(`${item.oc}Style`).primaryBackground,item.oc === 'closed' ? {borderWidth:1, borderColor:defaultConsts.mutedBlack, backgroundColor:defaultConsts.mutedBlack}: {borderWidth:1, borderColor:defaultConsts.mutedGray}]}>
                <Text style={[ eval(`${item.oc}Style`).fieldlabel,{opacity: .8}]}>{status}</Text>
                <Text style={[ eval(`${item.oc}Style`).fieldlabel,{opacity: .8}]}>{otherDateItem}</Text>
                <TouchableOpacity style={[eval(`${item.oc}Local`).scheduleX]}>
                  <Feather name={'x'} size={12} color={item.oc === "closed" ? defaultConsts.compOrange : defaultConsts.lightPrimary}  />
                </TouchableOpacity>
              </View>
            </View>
     
          )
        })
      }
      </View> 
    
  </SafeAreaView>
    ) 
}

export default Schedule;

const localStyle = StyleSheet.create({
  tbButtonSchedule:{
    height: 75,
  },
  saveScheduleButtonTextFont:{
    textAlign: 'center',
    fontFamily: defaultConsts.semiBoldFont,
    fontSize: 13
  },
})

const fakeData = [
  {
    oc : 'open',
    time: 1673506849,
    id: '05299798-a44a-4fcd-a87e-fcc745236e68'
  },
  {
    oc : 'closed',
    time: 1673193829,
    id:'3acdc454-8f96-4dc8-8ee9-f16afa322a69'
  },
  {
    oc : 'closed',
    time: 1673656849,
    id:'4cc4ec13-1315-423f-9bfe-8151c56fc775'
  },
  {
    oc : 'open',
    time: 1673996849,
    id: '1c73ef53-58ef-45b3-a167-44f9244fda9a'
  },
  {
    oc : 'open',
    time: 1673507955,
    id: '1c73ef53-58ef-45b3-a167-44f9244fda9a'
  },

]
const openLocal = StyleSheet.create({
 scheduleX:{
  backgroundColor: defaultConsts.compOrange,
  padding: 2,
  borderRadius:8,
 },
 scheduleForm:{
  
 },
 saveScheduleButton:{
  backgroundColor: defaultConsts.compOrange,
 },
 saveScheduleButtonText:{
  color: defaultConsts.lightPrimary,
 }
})

const closedLocal = StyleSheet.create({
  scheduleX:{
    backgroundColor: defaultConsts.lightPrimary,
    padding: 2,
    borderRadius:'50%',
  },
  scheduleForm:{
    backgroundColor: defaultConsts.darkPrimary,
    borderColor: defaultConsts.lightPrimary,
    borderWidth: 1,
  },
  saveScheduleButton:{
    backgroundColor: defaultConsts.lightPrimary,
   },
  saveScheduleButtonText:{
    color : defaultConsts.compOrange,
    opacity: .8
  }
})