import React from "react";
import { View,Text } from "react-native";
import Timer from "../components/Timer";
const Infiniminute= () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text><Timer/></Text>
        </View>
      );
    }
  export default Infiniminute;
