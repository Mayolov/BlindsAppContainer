import React,{useRef, useState} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image,TouchableOpacity, SafeAreaView, Dimensions, FlatList} from 'react-native';
import useBlindsConnector from '../../../hooks/useBlindsConnector';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';
import { convertDate} from '../../../hooks/dateFormatter'
import Toggle from "react-native-toggle-element";
import DateTimePickerModal from "react-native-modal-datetime-picker"
const ScheduleForm = ({GlobalState}) =>{
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

    return(
        <View style={[globalStyle.settingsItemContainer]}>
        <View style={[globalStyle.tbComboField, globalStyle.fieldShadow, eval(`${choice}Style`).scheduleForm]}>
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
            <View style={[{flexDirection: 'row'}]}>
            <TouchableOpacity onPress={()=>{showDatePicker()}}>
              <Text style={[ eval(`${choice}Style`).fieldlabel,{opacity: .8, textDecorationLine:"underline"}]}>{timeStamp ? convertDate(timeStamp, "date") : "choose date"}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDay}
            onCancel={hideDatePicker}
            date={date ? date : new Date()}
          />
          <Text style={[ eval(`${choice}Style`).fieldlabel,{paddingHorizontal: 0}]}>{!date ? "  &  " : "  @  " }</Text>
          <TouchableOpacity onPress={()=>{showTimePicker()}}>
              <Text style={[ eval(`${choice}Style`).fieldlabel,{opacity: .8, textDecorationLine:"underline"}]}>{timeStamp ? convertDate(timeStamp, "time") : "time"}</Text>
          </TouchableOpacity>
          
           <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTime}
            onCancel={hideTimePicker}
            date={date ? date : new Date()}
          />
            </View>
            <TouchableOpacity style={[globalStyle.tbButton, eval(`${choice}Style`).saveScheduleButton]}>
            <Text style={[globalStyle.saveScheduleButtonTextFont, eval(`${choice}Style`).saveScheduleButtonText]}>
                  save
            </Text>
          </TouchableOpacity>
            </View>
            </View>
    )
}
export default ScheduleForm;