import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons"; 
 
const DATA = [
  {
    id: "1",
    // uri: require("../assets/Bg.jpg "),
    title: "Ліс",
    comments: [],
    like: "0",
    location: `Ukraine`,
  },
//   {
//     id: "2",
//     // uri: "http://schemas.android.com/apk/res/android",
//     title: "Захід на Чорному морі",
//     comments: [],
//     like: "0",
//     location: `Ukraine`,
//   },
//   {
//     id: "3",
//     // uri: "https://s3-alpha-sig.figma.com/img/5e97/0c74/9cd3abbfbe6ba44f66a368baac9c2839?Expires=1693785600&Signature=jpqORqlTSyx8sqlPrN8iUo4fDbxeGdwpGXvh6-xefxfkl3ZCUnA6P62f~YZTT1SZNo6fNjyaBP3XD~0GIZviPUjGMlN6e09nA~Ro6wYeu2YgL3EjtFVwGBMyOq9CklRaGPQNXexq7OQzu4KktcHoVnImBdSQKulPfV7VRNqZJSkGdvkW3UbEoN18YlchUOxgFwNwkjWStHjIzHEUhc3trG8cCpRFuWl4h0FnNkF3w003~6dN0DEimgCUx5xk8zqXaP1FaL1uwSTsDJHNtreKAIaQW8t2WNLtcg7KYDs6zpg2PWfxNRT-fwJUM6KGBvydTyAJDBb~~rF66onIKRnbpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     title: "Старий будиночок у Венеції",
//     comments: [],
//     like: "0",
//     location: `Italy`,
//   },
];






export const Posts = () => {
  const Item = ({ title, uri, location, comments, like, image }) => (
    <View style={styles.contentBox}>
      <Image source={require("../assets/forest.jpg")} style={styles.imgBox} />
      <Text style={styles.namePost}>{title}</Text>

      <View style={styles.info}>
        <TouchableOpacity style={styles.iconComent}>
          <Feather name="message-circle" size={24} color="#FF6C00" />
        </TouchableOpacity>
        <Text style={styles.number}>0</Text>
        <TouchableOpacity style={styles.iconLike}>
          <Feather name="thumbs-up" size={24} color="#FF6C00" />
        </TouchableOpacity>
        <Text style={styles.numb}>{like}</Text>
        <TouchableOpacity style={styles.iconMap}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.text}>{location}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={DATA}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          uri={item.uri}
          like={item.like}
          location={item.location}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
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
    bottom: 45,
  },
  imgBox: {
    width: 380,
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
