import React from "react";
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import LottieView from "lottie-react-native";
import { openStyles, closedStyles, globalStyle, defaultConsts } from '../../../assets/GlobalStyle';

const Splasher = () =>{
    return (
        <SafeAreaView style={[globalStyle.container, globalStyle.flex1]}>
            <View style={[globalStyle.centerInside]}>
            <LottieView
                            style={[{width: 60, height: 30, marginTop: 2}]}
                            source={require("../../../assets/orangedots.json")}
                            autoPlay={true}
                            loop={true}
                          />
            </View>
        </SafeAreaView>
      )
}

export default Splasher;