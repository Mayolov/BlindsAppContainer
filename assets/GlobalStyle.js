import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export const defaultConsts = {
    darkPrimary : "#333940",
    lightPrimary :  "#fafafa",
    lightSecondary : "#c6d3d7",
    darkFont : '#ecf5fb',
    compOrange : "#f16102",
    compBlue : "#91bdd5",
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
      }
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
    }
  })