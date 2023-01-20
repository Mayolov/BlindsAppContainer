import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';
import { convertDate} from '../../../hooks/dateFormatter'
import { Feather } from '@expo/vector-icons';

const ScheduleList = ({item, deleteSchedule, scheduleList})=>{
  const status = item.oc === "closed" ? "close" :"open";
  const openStyle = openStyles;
const closedStyle = closedStyles;
  return (
    <View style={[globalStyle.settingsItemContainer,{marginBottom:15}]}>
      <View style={[globalStyle.tbComboField,eval(`${item.oc}Style`).primaryBackground,item.oc === 'closed' ? {borderWidth:1, borderColor:defaultConsts.mutedBlack, backgroundColor:defaultConsts.mutedBlack}: {borderWidth:1, borderColor:defaultConsts.mutedGray}]}>
        <Text style={[ eval(`${item.oc}Style`).fieldlabel,{opacity: .8}]}>{status}</Text>
        <Text style={[ eval(`${item.oc}Style`).fieldlabel,{opacity: .8}]}>{convertDate(item.time , "datetime")}</Text>
        <TouchableOpacity onPress={()=>deleteSchedule(item.id, scheduleList)} style={[eval(`${item.oc}Style`).scheduleX]}>
          <Feather name={'x'} size={12} color={item.oc === "closed" ? defaultConsts.compOrange : defaultConsts.lightPrimary}  />
        </TouchableOpacity>
      </View>
    </View>
  
  )
}
export default ScheduleList;