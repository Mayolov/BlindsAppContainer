import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import ipRegex from "ip-regex";
const useIpAddress = () =>{
    const [baseURI, setBaseURI] = useState(null)
    const [locUI, setLocUi] = useState(null)
    async function checkIp(){
        const ni = await NetInfo.fetch()
        const savedIP = await AsyncStorage.getItem('@SavedIp')

        setBaseURI(savedIP ? savedIP : ni.details.ipAddress)
        setLocUi(ni.details.ipAddress)
    }
    useEffect(()=>{
       checkIp()
    },[])

    async function saveIp(s){
        try{
            if(ipRegex({exact: true}).test(s)){
                const savedIp = await AsyncStorage.setItem('@SavedIp', s)
                setBaseURI(savedIp)
                Alert.alert('IP Saved', 'What the title said', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
            }else{
                Alert.alert('Not an IP', 'What the title said', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
            }
            
        }catch(err){
            console.log('was not able to save ip', err)
        }
    }
    
    return { baseURI, setBaseURI, locUI, saveIp}
}

export default useIpAddress;