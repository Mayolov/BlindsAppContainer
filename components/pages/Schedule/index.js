import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image,TouchableOpacity, SafeAreaView, Dimensions, FlatList} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';
import { Button, Card } from '@rneui/base';
import { convertDate} from '../../../hooks/dateFormatter'
import { fakeData } from '../../../assets/fakeData'
import Toggle from "react-native-toggle-element";
import { MaterialIcons, Feather } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import ScheduleList from '../../parts/ScheduleList';
import ScheduleForm from '../../parts/ScheduleForm';



const Schedule = ({GlobalState}) =>{

const {toggleValue, setToggleValue, baseURI, setBaseURI} = GlobalState;
const [isDatePickerVisible, setDatePickerVisible] = useState(false);
const [isTimePickerVisible, setTimePickerVisible] = useState(false);
const openStyle = openStyles;
const closedStyle = closedStyles;
const [choice, setChoice] = useState('closed')
const [date, setDate] = useState(null)
const [timeStamp, setTimeStamp] = useState(null)

const showDatePicker = () => {
  setDatePickerVisible(true);
  console.log('why u not working')
};

const hideDatePicker = () => {
  setDatePickerVisible(false);
  console.log('dead in the water')
};
const showTimePicker = () =>{
  console.log('time picker working???')
  setTimePickerVisible(true);
}
const hideTimePicker = () =>{
  setTimePickerVisible(false);
}

const handleDay = (d) => {
  console.warn("A date has been picked: ", d);
  const timeStamper = d.getTime()
  console.log(timeStamper)
  setTimeStamp(timeStamper)
  setDate(d)
  hideDatePicker()
};
const handleTime = (t) => {
  console.warn("A time has been picked: ", t);
  const timeStamper = t.getTime()
  console.log(timeStamper)
  setTimeStamp(timeStamper)
  setDate(t)
  hideTimePicker();
};

  // const [handleOpenTime, handleClosingTime, handleIP, controlBlinds, closeTime, openTime, sleepMode] = useBlindsConnector();

    return (
  <SafeAreaView style={[globalStyle.container,eval(`${toggleValue}Style`).primaryBackground, globalStyle.flex1]}>
    <View style={[globalStyle.centerInside,{marginHorizontal: 30,}]}>
    <Text style={[globalStyle.subPageHeader, globalStyle.primaryFont, eval(`${toggleValue}Style`).primaryFont]}>
       schedule
      </Text>
      <ScheduleForm GlobalState={GlobalState} />
      <FlatList 
        data={fakeData.sort((a, b) => a.time -b.time)}
        renderItem={ScheduleList}
        keyExtractor={(item)=>item.id}
        style={[globalStyle.settingsItemContainer,{height: 350}]}
      />
       
      </View> 
      
  </SafeAreaView>
    ) 
}

export default Schedule;




