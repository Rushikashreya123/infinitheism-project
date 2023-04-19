import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";

const ZoomLink = ({ navigation }) => {
  return (
    
    <View style={styles.ZoomLinkComponent}>
      <Text style={styles.zoomHeading}>Meeting</Text>

      <View style={styles.zoom}>
        <Pressable
          style={styles.zoomData}
          onPress={() => navigation.navigate("ZoomPage")}
        >
          <Text style={styles.zoomTextColorTitle}>
            My ZAxis session by Mahatria{" "}
          </Text>
          <Text style={styles.zoomTextColorLink}>
            11am,Mar 25, https://meet.google.c…
          </Text>
        </Pressable>
        <Pressable
          style={styles.zoomData}
          onPress={() => navigation.navigate("ZoomPage")}
        >
          <Text style={styles.zoomTextColorTitle}>
            My ZAxis session by Mahatria{" "}
          </Text>
          <Text style={styles.zoomTextColorLink}>
            11am,Mar 25, https://meet.google.c…
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ZoomLink;

const styles = StyleSheet.create({
  ZoomLinkComponent: {
    paddingTop: 30,
  },
  zoomHeading: {
    paddingBottom: 10,
    color: "white",
    fontFamily: "nunito-r",
    fontSize: 16,
  },
  zoomData: {
    backgroundColor: "#EDF2FF",
    height: 65,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  zoomTextColorTitle: {
    color: "rgba(0, 35, 140, 1)",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "libre",
  },
  zoomTextColorLink: {
    color: "rgba(0, 35, 140, 1)",
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "nunito",
  },
  zoom: {
    gap: 20,
  },
});
