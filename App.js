import React,{useRef, useState, useEffect} from 'react';
import {StyleSheet ,TextInput, Text, Alert, View, Image, SafeAreaView, Button, Dimensions} from 'react-native';
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_300Light,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splasher  from './components/parts/Splasher';
import Homer from './components/pages/Homer';
import Schedule from './components/pages/Schedule';
import Settings from './components/pages/Settings';
import { defaultConsts } from './assets/GlobalStyle';
import useToggleSwitch from './hooks/useToggleSwitch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useIpAddress from './hooks/useIpAddress';


const Tab = createBottomTabNavigator();

function TheTabs({GlobalState}){
 
  const {toggleValue, setToggleValue, baseURI, setBaseURI} = GlobalState;
  



  return (
  
      <Tab.Navigator 
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopWidth: 0,backgroundColor : toggleValue === "closed" ? defaultConsts.darkPrimary : defaultConsts.lightPrimary},
      // tabBarLabelStyle: {fontFamily: 'Inter_400Regular',fontSize:  12 , color: toggleValue === "closed" ? defaultConsts.darkFont : defaultConsts.compOrange},
      tabBarIcon:({ focused, color, size}) =>{
        let iconName;

        if (route.name === 'switch'){
          iconName = 'toggle-left'
        }else if(route.name === 'schedule'){
          iconName = 'calendar'
        }else{
          iconName = 'settings'
        }
        return <View style={[{opacity: focused ? .8 : .3}]}><Feather name={iconName} size={focused ? 28: 22} color={toggleValue === "closed"?  defaultConsts.darkFont : defaultConsts.compOrange} /></View>
       
      },
        
    })}>
      <Tab.Screen 
        name="switch"
        options
         >
        {props => <Homer {...props} GlobalState={GlobalState}/>}
      </Tab.Screen>
      <Tab.Screen 
        name="schedule"
        options
         >
        {props => <Schedule {...props} GlobalState={GlobalState}/>}
      </Tab.Screen>
      <Tab.Screen 
        name="settings"
        options
         >
        {props => <Settings {...props} GlobalState={GlobalState}/>}
      </Tab.Screen>
      </Tab.Navigator>
 
    
  )
}

const App = () => {


  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_300Light,
    Inter_600SemiBold,
  });
  const {baseURI, setBaseURI, locUI, saveIp} = useIpAddress();
  const {toggleValue, setToggleValue, checkSavedToggle, saveToggle}= useToggleSwitch(null)
  

  const GlobalState = {
    saveIp, toggleValue, setToggleValue, baseURI, setBaseURI, saveToggle, checkSavedToggle, locUI
  }

  return (
  <SafeAreaProvider>
    {
     !fontsLoaded || !toggleValue ?
          <Splasher />
     :
            <NavigationContainer>
              <TheTabs GlobalState={GlobalState}/>
          </NavigationContainer>
    }
  
  </SafeAreaProvider>
  )
  
    

    


}

export default App;