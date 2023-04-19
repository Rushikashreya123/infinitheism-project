import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Pressable, ImageBackground } from "react-native";
import React from "react";


const TimerCard = ({ navigation }) => {
  return (
    
    <Pressable  onPress={() => navigation.navigate('Infiniminute')} >
      <ImageBackground style={styles.timerComp} source={require('../assets/images/Rectangle.png')} imageStyle={{borderRadius:10}}>
      <View style={styles.inifiLogo}>
        <Image source={require("../assets/images/logo.png")} />
      </View>
      
      <View>
        <Text style={styles.timerHeading}>Infiniminute</Text>
        
      </View>

      </ImageBackground>
     
      
      
    </Pressable>
  );
};

export default TimerCard;

const styles = StyleSheet.create({
  timerComp: {
    // width: 350,
    height: 250,
    backgroundColor: "rgba(216, 216, 216, 0.333)",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:75,
    paddingVertical:15,
  },
  timerHeading:{
    fontSize:24,
    fontFamily:'libre',
    color:'white',
    paddingTop:20,
  }
 
});
