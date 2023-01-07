import React,{useRef, useState} from 'react';
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
import { Splasher } from './components/parts/Splasher';
import { TabActions } from '@react-navigation/native';
import Homer from './components/pages/Homer';
import Scheduler from './components/pages/Scheduler';
import Settings from './components/pages/Settings';
import { defaultConsts } from './assets/GlobalStyle';



const Tab = createBottomTabNavigator();
function TheTabs(){
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_300Light,
    Inter_600SemiBold,
  });
  
  const [toggleValue, setToggleValue] = useState('open')
  const [baseURI, setBaseURI] = useState('http://10.0.181:80');
  const GlobalState = {
    toggleValue, setToggleValue, baseURI, setBaseURI
  }

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
        return <View style={[{opacity: focused ? .8 : .3}]}><Feather name={iconName} size={focused ? 28: 22} color={toggleValue === "closed"?  defaultConsts.darkFont : defaultConsts.compOrange} iconStyle={{backgroundColor: 'black'}}/></View>
       
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
        {props => <Scheduler {...props} GlobalState={GlobalState}/>}
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

  return (
  <SafeAreaProvider>
    {
     !fontsLoaded ?
          <Splasher />
     :
        <>
            <NavigationContainer>
              <TheTabs />
          </NavigationContainer>
        </>
    }
  </SafeAreaProvider>
  )
  
    

    


}

export default App;
