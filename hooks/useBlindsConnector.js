import React, {useRef, useState} from "react";

export default function useBlindsConnector(){
    const handleIP = () => {
        Alert.alert(
          'Input',
          baseURIPre,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed')
            }
          ],
          { cancelable: false }
        );
      };
    
      const handleOpenTime = () => {
        Alert.alert(
          'Input',
          openingTime,
          [
            {
              text: 'OK',
              onPress: () => openTime(openingTime)
            }
          ],
          { cancelable: false }
        );
      };
    
      const handleClosingTime = () => {
        Alert.alert(
          'Input',
          closingTime,
          [
            {
              text: 'OK',
              onPress: () => closeTime(closingTime)
            }
          ],
          { cancelable: false }
        );
      };
    
      async function controlBlinds(command) {
        try {
          let response = await fetch(`${baseURI}/controlBlinds`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              command: command,
            }),
          });
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
      
      async function closeTime(blindsShutTime) {
        try {
          let response = await fetch(`${baseURI}/closeTime`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              blindsShutTime: blindsShutTime,
            }),
          });
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
      
      async function openTime(blindsOpenTime) {
        try {
          let response = await fetch(`${baseURI}/openTime`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              blindsOpenTime: blindsOpenTime,
            }),
          });
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
      async function sleepMode(sleepAmount) {
        try {
          let response = await fetch(`${baseURI}/sleepMode`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sleepAmount: sleepAmount,
            }),
          });
          
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
    
}