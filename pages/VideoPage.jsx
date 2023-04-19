import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import VedioLibDisplay from '../components/videoLibraryDisplay';
import data from '../data';

const VideoPage = () => {
  const bgr=require('../assets/images/bg.jpg')
  return (
    <ImageBackground source={bgr} style={styles.vedioData}>
      <VedioLibDisplay data={data}/>
    </ImageBackground>
  )
}

export default VideoPage;

const styles = StyleSheet.create({
  vedioData:{
    paddingBottom:150,
    flex:1,
  }
})