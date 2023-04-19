import { useState } from "react";
import React, { Component, Pressable } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,

} from "react-native";
import Download from "./common/svg-comp/Download";
import Play from "./common/svg-comp/Play";

const VideoCard = ({ data, onHandledVideo }) => {
  const onHandledVideoCard = (index) => {
    onHandledVideo(index);
  };

  return (
    <View>
      <View>
        <Text style={styles.chapter}>All Chapters</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <View>
            <Pressable onPress={() => onHandledVideoCard(index)}>
              <ImageBackground source={item.img} style={styles.thumbnailImage}>
                <Play style={styles.playSvg} />
              </ImageBackground>
            </Pressable>
          </View>
          <View style={styles.cardData}>
            <View>
              <Text style={styles.discrptext}>{item.discription}</Text>
            </View>
            
            <View style={styles.down}>
              <Text style={styles.chapterName}>{item.chapterName}</Text>
              <Download style={{ width: 20, height: 20 }} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  thumbnailImage: {
    width: 119,
    height: 70,
    borderColor: "white",
    borderStyle: "solid",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 0,
  },
  cardData: {
    flex: 1,
    flexDirection: "column",
    color: "white",
    justifyContent: "space-around",
    gap: 10,
  },
  discrptext: {
    color: "white",
    fontSize: 17,
    paddingLeft: 10,
    flexWrap: "wrap",
    maxWidth: 200,
    lineHeight: 20,
    // fontWeight: 300,
    fontFamily: "nunito",
  },
  chapterName: {
    color: "#97A8DB",
    fontSize: 17,
    paddingLeft: 10,
    fontFamily: "nunito",
  },
  playSvg: {
    position: "absolute",
  },
  chapter: {
    fontSize: 32,
    color: "white",
    fontFamily: "abhaya",
  },
  down: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
