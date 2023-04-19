import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import * as Progress from 'react-native-progress';
import { ProgressBar } from 'react-native-progress';
import { Video, AVPlaybackStatus } from "expo-av";
import Notes from "./common/svg-comp/notes";
import Fav from "./common/svg-comp/Fav";
import Share from "./common/svg-comp/share";
import Download from "./common/svg-comp/Download";
import * as React from "react";
import Card from "./VideoCard";
import PauseButton from "./common/svg-comp/pausebutton";
import PlayButton from "./common/svg-comp/playButton";
export default function VedioLibDisplay({ data }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [vedioSelected, setVedioSelected] = React.useState(0);
  const [DataArray, setDataArray] = React.useState(data);
  

  const handleVideoSelection = (index) => {
    setVedioSelected(index);
    console.log(index);
  };
  
  return (
    <View style={styles.DispContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={data[vedioSelected].video}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      
     
       
      <ScrollView style={styles.DisplayContainer}>
        <View style={styles.desc}>
          <Text style={styles.title}>{data[vedioSelected].title}</Text>
          <Text style={styles.discription}>
            {data[vedioSelected].discription}
          </Text>
          <Text style={styles.chap}>
            {data[vedioSelected].chapterName} | {data[vedioSelected].duration}
          </Text>
        </View>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
            
          >
            <View style={styles.PlayButton}>
              <View>{status.isPlaying ? <PauseButton /> : <PlayButton />}</View>
              <Text style={styles.buttonText}>
                {status.isPlaying ? "Resume" : "Play"}
              </Text>
            </View>
          </Pressable>

          <View style={styles.hr}></View>
        </View>

        <View style={styles.icons}>
          <View style={styles.iconsData}>
            <Notes />
            <Text style={styles.textColor}>Take Notes</Text>
          </View>
          <View style={styles.iconsData}>
            <Fav />
            <Text style={styles.textColor}>Add to Fav</Text>
          </View>
          <View style={styles.iconsData}>
            <Download />

            <Text style={styles.textColor}>Download</Text>
          </View>
          <View style={styles.iconsData}>
            <Share />
            <Text style={styles.textColor}>Share</Text>
          </View>
        </View>
        <Card data={data} onHandledVideo={handleVideoSelection} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  DispContainer: {
    padding: 0,
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",
    width: 400,
    height: 230,
    paddingTop: 40,
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingBottom: 30,
    gap: 30,
  },
  title: {
    fontSize: 32,
    color: "white",
    paddingTop: 10,
    fontFamily: "abhaya",
  },
  desc: {
    gap: 10,
    paddingBottom: 20,
    fontFamily: "nunito",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 80,
  },
  iconsData: {
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#97A8DB",
    paddingTop: 8,
    fontFamily: "nunito",
  },
  discription: {
    fontSize: 16,
    color: "white",
    opacity: 0.7,
    fontWeight: 400,
    fontFamily: "nunito",
  },
  chap: {
    color: "#97A8DB",
    fontSize: 16,
    fontFamily: "nunito",
  },
  hr: {
    borderColor: "#97A8DB",
    borderWidth: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "#3556D5",
  },
  DisplayContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "nunito",
  },
  button: {
    backgroundColor: "rgba(252,252,252,0.3)",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 23,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    width: 176,
    borderRadius: 23,
    elevation: 10, // Sets the shadow depth
    shadowColor: 'rgba(0,0,0)', // Sets the shadow color
    shadowOpacity: 0.7, // Sets the shadow transparency
    shadowRadius: 14, // Sets the outer shadow blur radius
    shadowOffset: {
      width: 2, // Sets the outer shadow offset horizontally
      height: 0, // Sets the outer shadow offset vertically
    },
    overflow: 'hidden', // Ensures the inner shadow does not overflow the container
  },
  innerShadow: {
    shadowColor: 'rgba(25,46,123,0.52)', // Sets the inner shadow color
    shadowOpacity: 0.4, // Sets the inner shadow transparency
    shadowRadius: 27, // Sets the inner shadow blur radius
    shadowOffset: {
      width: -11, // Sets the inner shadow offset horizontally
      height: -7, // Sets the inner shadow offset vertically
    },
  },
  
  
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "nunito",
  },
  PlayButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "nunito",
  },
});
