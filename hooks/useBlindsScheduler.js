import {useState, useEffect, useCallback} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';





const useBlindsScheduler = () =>{
    const [scheduleList, setScheduleList] = useState([])
    const loadSchedule = useCallback(async ()=>{
        try{
            const sl = await AsyncStorage.getItem('@ScheduleList')
            if(sl){
                const parsedSl = JSON.parse(sl)
                setScheduleList(parsedSl) 
            }
            console.log('set schedule called sl is : ', sl)
            
        }catch(err){
            console.log('error on load schedule : ', err)
        }
        
    },[])

    const saveSchedule = useCallback(async (time, oc, scheduleL)=>{
        const newId = uuidv4();
        const scheduleTempUpdate = [...scheduleL, {oc: oc, time: time, id: newId}]
        const savedSchedule = await AsyncStorage.setItem('@ScheduleList', JSON.stringify(scheduleTempUpdate))
        console.log('saved schedule on schedule save: ', saveSchedule)
        loadSchedule()
        
        

    },[])

    const deleteSchedule = useCallback(async (id, scheduleL)=>{

        try{
            const filtered = scheduleL.filter(item => item.id !== id)
            const savedSchedule = await AsyncStorage.setItem('@ScheduleList', JSON.stringify(filtered))
            console.log('saved schedule on schedule delete: ', saveSchedule)
            loadSchedule();
        }catch(err){
            console.log('err on delete  schedule : ' + err)
        }
        
    },[])


    
    useEffect(()=>{
        loadSchedule()
    },[])

    return {loadSchedule, saveSchedule, deleteSchedule, scheduleList, setScheduleList}

}

export default useBlindsScheduler;