import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 
import { AntDesign } from "@expo/vector-icons"; 


export const CreatePostsScreen = () => {
const [userImg, setUserImg] = useState(null)

  return (
    <View style={styles.contBox}>
      {userImg ? (
        <Image source={require("../assets/forest.jpg")} style={styles.imgBox} />
      ) : (
        <View style={styles.templateBox}></View>
      )}

      <TouchableOpacity>
        <MaterialIcons
          name="photo-camera"
          size={24}
          style={[
            styles.icon,
            userImg
              ? { backgroundColor: "rgba(255, 255, 255, 0.3)" }
              : { backgroundColor: "#fff" },
          ]}
          color={userImg ? "#FFFFFF" : "#BDBDBD"}
        />
      </TouchableOpacity>
      <Text style={styles.photoText}>
        {userImg ? "Редагувати фото" : "Завантажте фото"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Назва"
        placeholderTextColor="#BDBDBD"
        placeholderStyle={styles.placeholderStyle}
      />
      <TextInput
        style={[styles.input, styles.placeholderStyle]}
        placeholder="Місцевість..."
        placeholderTextColor="#BDBDBD"
        // style={styles.placeholderStyle}
      />
      <View>
        <AntDesign
          name="enviromento"
          size={24}
          color="#BDBDBD"
          style={styles.iconMarker}
        />
      </View>
      <TouchableOpacity style={styles.btnPublick}>
        <Text style={styles.textBtn}>Опубліковати</Text>
      </TouchableOpacity>
      <View style={styles.delete}>
        <TouchableOpacity style={styles.btnDelete}>
          <AntDesign
            name="delete"
            size={24}
            color="#BDBDBD"
            // style={styles.btnDelete}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imgBox: {
    
    height: 240,
    borderRadius: 8,
    borderRightWidth: 1,
  },
  contBox: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection:"column"
  },
  icon: {
    width: 60,
    height: 60,
    bottom: 150,
    left: 160,
    padding: 19,

    borderRadius: 50,
  },
  templateBox: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  photoText: {
    color: "#BDBDBD",
    size: 16,
    width: 400,
    bottom: 50,
  },
  input: {
   
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
  },

  placeholderStyle: {
    fontSize: 16,
    color: "#BDBDBD",
    paddingLeft: 30,
  },
  btnPublick: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 120,
    paddingRight: 120,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 16,
  },
  textBtn: {
    color: "white",
  },
  iconMarker: {
    bottom: 55,
  },
  btnDelete: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
   width:70
    
  },
  delete
    : {
    alignItems: "center",
      marginTop:"auto",
  },
});
