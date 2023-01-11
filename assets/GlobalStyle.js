import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export const defaultConsts = {
    darkPrimary : "#333940",
    lightPrimary :  "#fafafa",
    lightSecondary : "#c6d3d7",
    darkFont : '#ecf5fb',
    compOrange : "#f16102",
    compBlue : "#91bdd5",
    mutedBlack: "#6a7177",
    mutedGray: '#f2f2f2',
    fullWidth : Dimensions.get('window').width,
    fullHeight : Dimensions.get('window').height,
    lightFont: 'Inter_300Light',
    regularFont: 'Inter_400Regular',
    semiBoldFont: 'Inter_600SemiBold',
    blackFont: 'Inter_900Black'
}


export const globalStyle = StyleSheet.create({
    fullWidthAndHeight:{
        width: defaultConsts.fullWidth,
        height: defaultConsts.fullHeight,
      },
      centerInside:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      flex1:{
        flex: 1,
      },
      container: {
        display: 'flex',    
        top: "0%",
        flex: 1,
        justifyContent: "center",
        alignContent:"center",
      },
      primaryFont:{
        textAlign: 'center',
        fontSize: 22,
        fontFamily: defaultConsts.semiBoldFont,
        letterSpacing: 1.3,
      },
      labelFont:{
        fontSize: 12,
        fontFamily: defaultConsts.semiBoldFont,
        letterSpacing: 1.3,
      },
      fullButtonTitleFont:{
        fontSize: 14,
        fontFamily: defaultConsts.semiBoldFont,
      }, 
      /*---subpage styles----*/
    subPageHeader:{
      marginBottom:22,
    },
    /*----form styles---*/
    settingsItemContainer:{
      width: '100%',
      marginBottom: 25,
    },
    fieldlabel:{
      fontSize: 14,
      marginBottom: 15,
      color: defaultConsts.lightPrimary,
      marginLeft: 2,
    },
    tbComboField:{
      backgroundColor: '#ffffff',
      width: '100%',
      height: 45,
      paddingHorizontal: 10,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 5,
      justifyContent: 'space-between'
    },
    tbComboBtnwrap:{
      paddingHorizontal: 0,
    },
    tbTextInput:{
      width: '80%',
      fontFamily: defaultConsts.regularFont,
      color: defaultConsts.darkPrimary,
      opacity: .8
    },
    tbButton:{
      width: '20%',
      padding: 5,
      borderRadius: 3,
      
    },
    tbButtonTextFont:{
      textAlign: 'center',
      color: defaultConsts.lightPrimary,
      fontFamily: defaultConsts.semiBoldFont,
      fontSize: 13
    },
    fullButton:{
      width: '100%',
      height: 42,
      margin: 0,
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      
    },
   
    fieldShadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
    },
    tbButtonSchedule:{
      height: 75,
    },
    saveScheduleButtonTextFont:{
      textAlign: 'center',
      fontFamily: defaultConsts.semiBoldFont,
      fontSize: 13
    },
})

export const openStyles = StyleSheet.create({
    primaryBackground: {
      backgroundColor: defaultConsts.lightPrimary,
    },
    secondaryBackground: {
      backgroundColor: defaultConsts.lightPrimary,
    },
    primaryFont:{
      color: defaultConsts.compOrange,
    },
    tbButton:{
      backgroundColor: defaultConsts.compOrange,
  
    },
    fullButton:{
      borderColor: defaultConsts.lightPrimary,
      backgroundColor: defaultConsts.compOrange,
    },
    fieldlabel:{
      color: defaultConsts.darkPrimary,
      opacity: .4
    },
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

  export const closedStyles = StyleSheet.create({
    primaryBackground: {
      backgroundColor: defaultConsts.darkPrimary,
      
    },
    secondaryBackground: {
      backgroundColor: defaultConsts.darkSecondary,
    },
    primaryFont:{
      color: defaultConsts.darkFont,
    },
    tbButton:{
      backgroundColor: defaultConsts.darkPrimary,
      opacity: .7
    },
    fullButton:{
      borderColor: defaultConsts.lightPrimary,
      backgroundColor: defaultConsts.darkPrimary,
      opacity: .7,
    },
    fieldlabel:{
      color: defaultConsts.lightPrimary,
    },
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