import { StyleSheet, ImageBackground,Dimensions } from "react-native";
import React from "react";
import Header from "../components/Header";
import TimerCard from "../components/TimerCard";

import cardData from "../assets/json-files/cardData";
import { useNavigation } from "@react-navigation/native";
import ContinueWatching from "../components/ContinueWatching";
import ZoomLink from "../components/ZoomLink";
const screenWidth= Dimensions.get("window").width;
const screenHeight= Dimensions.get("window").height;
const LandingPage = () => {
  const navigation = useNavigation();
  const Bgr = require("../assets/images/bg.jpg");
  return (
    <ImageBackground source={Bgr} style={styles.container}>
      <Header />
      <TimerCard navigation={navigation} />
      <ContinueWatching cardData={cardData} navigation={navigation}  />
      <ZoomLink navigation={navigation} />
    </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height:screenHeight,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:30,
    paddingTop:20,

    
  },
});

  