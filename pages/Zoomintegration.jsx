
// import React from "react";
// import { View,Text } from "react-native";
// const Zoomintegration= () => {

// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Zoom Integration Screen</Text>
//     </View>
//   );
// }
// export default Zoomintegration;

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Linking } from 'react-native';

import axios from 'axios';
export default function Zoomintegration() {
  const [username, setUsername] = useState('vaishnavi');
  const zoomMeeting = () => {
    const data = {
      email: 'vaishnavi@divami.com',
    };
    console.log(username);
    axios
      .post('http://172.22.30.117:3444/meeting',data)
      .then((response) => {
        let URL = response.data.join_url;
        console.log(URL);
        // Not sure if this will work on mobile, might need to use a different approach
        Linking.openURL(URL);
      })
      .catch((err) => console.error(err));
  };
  return (

   

    <View style={styles.container}>
      
    
    <View style={styles.card}>
      
      <View style={styles.buttonRow}>
        <Button title="Join" onPress={zoomMeeting} />
      </View>
     
    </View>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
 
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageColumn: {
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 350,
    borderRadius: 50,
  },
});

