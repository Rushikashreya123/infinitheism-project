import React, { useState, useEffect,useRef } from 'react';
import { View, Text,StyleSheet, ImageBackground,Dimensions } from 'react-native';
import {Audio} from 'expo-av';
import TimeDisplay from '../components/TimeDisplay';
//  import Dotsimage from './dots';
const screenWidth= Dimensions.get("window").width;
const screenHeight= Dimensions.get("window").height;
export default function Timer() {
  var endDate=new Date('2023-04-06T11:10:00')
  const [endTime, setendTime] = useState(endDate.getTime());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [audio, setaudio] = useState();
  
  const remainingTime=endTime-currentTime;
  const remainingdays=Math.floor(remainingTime/(1000*60*60*24));
  const remaininghours=Math.floor((remainingTime/(1000*60*60))+(remainingdays*24)).toString().padStart(2, "0");
  const remainingminutes=Math.floor((remainingTime%(1000*60*60))/(1000*60)).toString().padStart(2, "0");
  const remainingseconds=Math.floor((remainingTime%(1000*60))/1000).toString().padStart(2, "0");
  const audioRef = useRef(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  async function playAudio() { //is to play the sound when the end time is reached 
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/infiniprayer.mp3'),
      { shouldPlay: true, isLooping: true }
    );
    setaudio(sound);
    audioRef.current = sound;
    setTimeout(async () => {
      if (audioRef.current) {
        await audioRef.current.stopAsync();
      }
    },60*1000); // stop the sound after 60 seconds
  }
  useEffect(()=>{
    if(currentTime.getTime()>=endTime){
      // playAudio();
      const nextendtime=new Date(endTime);
      nextendtime.setDate(nextendtime.getDate()+1);
      setendTime(nextendtime.getTime());
     
    }
    if(remaininghours==0 && remainingminutes==1 && remainingseconds==8){
        
      playAudio();
    }
    
  },[currentTime,endTime]);
 

  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage} >
        <View>
          {/* <Dotsimage/> */}
        <TimeDisplay hours={remaininghours}
          minutes={remainingminutes}
          seconds={remainingseconds}
/>
      </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      color:'white'
  
    },
    backgroundImage: {
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    
  });
  
