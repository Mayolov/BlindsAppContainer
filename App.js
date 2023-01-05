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


function Set(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator();
function TheTabs(){
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_300Light,
    Inter_600SemiBold,
  });
  
  const [toggleValue, setToggleValue] = useState('open')
  const GlobalState = {
    toggleValue, setToggleValue
  }

  return (
    <Tab.Navigator 
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {borderTopWidth: 0,backgroundColor : toggleValue === "closed" ? darkPrimary : lightPrimary},
      tabBarLabelStyle: {fontFamily: 'Inter_400Regular',fontSize: 12, color: toggleValue === "closed" ? darkFont : compOrange},
      tabBarIcon:({ color, size}) =>{
        let iconName;

        if (route.name === 'switch'){
          iconName = 'toggle-left'
        }else if(route.name === 'schedule'){
          iconName = 'calendar'
        }else{
          iconName = 'settings'
        }
        return <Feather name={iconName} size={20} color={toggleValue === "closed"?  darkFont : compOrange} />
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
        {props => <Homer {...props} GlobalState={GlobalState}/>}
      </Tab.Screen>
      <Tab.Screen 
        name="settings"
        options
         >
        {props => <Homer {...props} GlobalState={GlobalState}/>}
      </Tab.Screen>
     

      
          
      </Tab.Navigator>
  )
}

const App = () => {


  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  //   Inter_400Regular,
  //   Inter_300Light,
  //   Inter_600SemiBold,
  // });

  
  // if(!fontsLoaded){
  //   return (
  //     <Splasher />
  //   )

  // }else {
  //   return (
    return(
    <SafeAreaProvider>
        <NavigationContainer>
          <TheTabs />
      </NavigationContainer>
    </SafeAreaProvider>
      
    )
    

    


}

export default App;

const darkPrimary = "#333940";
const darkSecondary = "#43535b";
const lightPrimary =  "#fafafa";
const lightSecondary = "#c6d3d7";
const darkFont = '#ecf5fb';
const compOrange = "#f16102";
const compBlue = "#91bdd5";
const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const closedStyles = StyleSheet.create({
  primaryBackground: {
    backgroundColor: darkPrimary,
    
  },
  secondaryBackground: {
    backgroundColor: darkSecondary,
  },
  primaryFont:{
    color: darkFont,
  }
})
const openStyles = StyleSheet.create({
  primaryBackground: {
    backgroundColor: lightPrimary,
  },
  secondaryBackground: {
    backgroundColor: lightPrimary,
  },
  primaryFont:{
    color: compOrange,
  }
})