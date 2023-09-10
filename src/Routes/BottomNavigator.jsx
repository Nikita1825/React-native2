import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Post } from "../components/Post";
import { Ionicons } from "@expo/vector-icons";

import { ProfileScreen } from "../Screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { PostScreen } from "../Screens/PostScreen";

export const BottomNavigator = ({ navigation }) => {
  const Tabs = createBottomTabNavigator();
  const goBack = () => {
    navigation.navigate("Login");
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Post") {
            return (
              <AntDesign
                name="appstore-o"
                size={24}
                color={focused ? "#FF6C00" : color}
              />
            );
          } else if (route.name === "CreatePost") {
            return (
              <AntDesign
                name="plus"
                size={24}
                color="white"
                style={styles.icon}
              />
            );
          }
          return (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FF6C00" : color}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: [{}, null],
      })}
    >
      <Tabs.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
              <Ionicons name="md-log-out-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarStyle: { display: "none" },
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="#000"
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 13.5,
    paddingTop: 13.5,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
