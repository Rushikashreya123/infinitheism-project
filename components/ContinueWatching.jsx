import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";

import React from "react";
import VerticalDots from "./common/svg-comp/verticalDots";

const ContinueWatching = ({ cardData, navigation }) => {
  return (
    <View style={styles.ContinueWatchingComp}>
      <Text style={styles.ContinueWatchingHeading}>Continue watching</Text>
      <ScrollView horizontal={true}>
        <View style={styles.watchCard}>
          {cardData.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("vedioPage")}
              style={styles.cardx}
            >
              <View>
                <ImageBackground
                  source={item.img}
                  style={styles.cardImage}
                  imageStyle={{ borderRadius: 10 }}
                ></ImageBackground>
              </View>
              <View style={styles.watchCardTitle}>
                <View style={styles.vedioCardData}>
                  <Text style={styles.watchTitle}>{item.title}</Text>
                  <VerticalDots />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ContinueWatching;

const styles = StyleSheet.create({
  ContinueWatchingComp: {
    height: 235,
    paddingTop: 20,
  },
  cardImage: {
    height: 150,
    width: 150,
    borderTopRightRadius: 200,
  },
  watchCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  watchCardTitle: {
    backgroundColor: "#EDF2FF",
    width: 150,
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    justifyContent: "center",

    position: "absolute",
    bottom: 0,
    padding: 5,
  },
  vedioCardData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  watchTitle: {
    color: "rgba(0, 35, 140, 1)",
    fontFamily: "nunito",
    fontWeight: 300,
    fontSize: 14,
  },
  cardx: {
    borderRadius: 10,
  },
  ContinueWatchingHeading: {
    color: "white",
    paddingBottom: 20,
    fontSize: 16,
    fontFamily: "nunito-r",
  },
});
