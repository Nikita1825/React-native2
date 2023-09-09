import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const PostScreens = () => {
  
  return (
    <View style={styles.publick}>
      <View style={styles.img}>
        <Image source={require("../assets/Natalli.jpg")} style={styles.Image} />
        <View>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  publick: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16
    
  },
  img: {
    marginBottom: 33,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  Image: {
    width: 60,
    height:60
  },
});