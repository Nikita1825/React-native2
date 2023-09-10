import React from 'react'
import { Ionicons } from "@expo/vector-icons"; 
import { Feather } from "@expo/vector-icons"; 
import { AntDesign } from "@expo/vector-icons"; 
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import  { useState } from "react";
import { Publication } from '../components/Publication';
export const ProfileScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Bg.jpg")}
    >
      <View style={styles.profile}>
        <Image
          source={require("../assets/Natali2.jpg")}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.closeIcon}>
          <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logIcon} onPress={goBack}>
          <Ionicons name="md-log-out-outline" size={25} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.name}>Natali Romanova</Text>

        <Publication />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop:300
  },
  avatar: {
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 32 - 60,
  },
  closeIcon: {
    backgroundColor: "white",
    right: -60,
    bottom: 70,
    borderRadius: 50,
  },
  logIcon: {
    bottom: 95,
    left: 185,
  },
  name: {
    fontSize: 30,
    bottom: 45
  },
  imgBox: {
    // width: 380,
    height: 240,
    borderRadius: 8,
    borderRightWidth: 1,
  },
  info: {
    display: "flex",
    flexDirection: "row",

    marginRight: "auto",
  },
  iconComent: {
    marginRight: 6,
  },
  number: {
    marginRight: 24,
    textAlignVertical: "bottom",
    fontSize: 16,
  },
  iconLike: {
    marginRight: 6,
  },
  iconMap: {
    marginLeft: 170,
    marginRight: 6,
  },
  numb: {
    textAlignVertical: "bottom",
    fontSize: 16,
  },
  text: {
    textAlignVertical: "bottom",
    fontSize: 16,
  },
  namePost: {
    marginRight: "auto",
    marginBottom: 8,
    marginTop: 8,
    fontSize: 16,
  },
});
