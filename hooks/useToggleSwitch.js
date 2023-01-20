import React, {useState, useEffect, useCallback} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



// mayolo's old code for controlling the blinds...
// async function controlBlinds(command) {
//     try {
//       let response = await fetch(`${baseURI}/controlBlinds`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           command: command,
//         }),
//       });
//       let responseJson = await response.json();
//       return responseJson;
//     } catch (error) {
//       console.error(error);
//     }
//   }
export default function useToggleSwitch (initialValue){
    const [toggleValue, setToggleValue] = useState(null)

    /******simulates checking status ****/
    const checkSavedToggle = useCallback(async ()=>{
        try{
            const st = await AsyncStorage.getItem('@CurrentToggle')
        const savedToggle = st
        setToggleValue(savedToggle ? savedToggle : 'closed') 
    }catch (err){
        console.log('error on check saved toggle')
    }
        
        
    },[])
    /******simulates saving out ****/
    const saveToggle = useCallback(async(v)=>{
        try{
            const saved = await AsyncStorage.setItem('@CurrentToggle', v)
            setToggleValue(v)

        }catch(err){
            console.log('error on save toggle')
        }
    },[])

    useEffect(()=>{
          checkSavedToggle()
      },[])
    
      return { toggleValue, setToggleValue, checkSavedToggle, saveToggle }
}

