import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Dots from "./common/svg-comp/Dots";
import Search from "./common/svg-comp/search";
import Notification from "./common/svg-comp/notification";
import NotifDot from "./common/svg-comp/notifDot";

const Header = () => {
  return (
    <View style={styles.header}>
      <View></View>
      <View style={styles.dots}>
        <Dots />
      </View>
      <View style={styles.headerRight}>
        <Search />
        <View>
          {/* <NotifDot style={{zIndex: 2}}/> */}
          <Notification style={{ zIndex: 1 }} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 60,
  },
  headerRight: {
    flexDirection: "row",
    gap: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  dots: {
    paddingLeft: 60,
  },
  Notification: {
    position: "absolute",
  },
});
