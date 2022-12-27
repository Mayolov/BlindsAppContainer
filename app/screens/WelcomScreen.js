import React from "react";
import { Image, ImageBackground,StyleSheet,Text,View} from "react-native";

function WelcomScreen(props){
    return(
        <ImageBackground
            resizeMode="contain"
            style = {styles.background}
            source={require("../assets/favicon.png")}
        >
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems:"center",
    },
    
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },

    registerButton:{
        width:"100%",
        height: 70,
        backgroundColor:"blue",
    },

    logo:{
        width:100,
        height:100,
        position: "absolute",
        top: 70
    },
    logoContainer:{
        position:"absolute",
        top: 70,
        alignItems: "center",

    }
})

export default WelcomScreen;