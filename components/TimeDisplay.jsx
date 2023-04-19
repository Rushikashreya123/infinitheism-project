import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
 

const TimeDisplay =({hours,minutes,seconds})=>
{ 
   return (
   <View >
      <View style={styles.header}>
      <Image source={require('../assets/images/infinitheism.png')} style={styles.dotsimage} />
      </View>
      <View style={styles.infinitheismlogo}><Image source={require('../assets/images/infinitheismlogo.png')}  /></View>
    <View style={styles.timer}>
    <Text style={styles.heading} >Time left to Infiniminute!</Text>
    <Text style={styles.timecontent}>{hours} : {minutes} : {seconds}</Text>
    <View>
    </View>
     
    </View>
   </View>);
    
}
export default TimeDisplay;
 
const styles=StyleSheet.create({
   timer:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
      paddingBottom:120,
      
   },
   header:
   {
      
     
      alignItems:'center',
      justifyContent:'center',
      paddingTop:100,
    
   },
   heading:{
      
      fontSize:24,
      fontFamily:'libre',
      color:'#07bdf0',
      
   },
   timecontent:{
      fontSize:40,
      color:'white',
      paddingTop:20,
      
   },
   dotsimage:
   {
    width:50,
    height:10,
   },
   infinitheismlogo:
   {
    paddingTop:70,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   }

})