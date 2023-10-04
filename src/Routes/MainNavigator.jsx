import React from 'react'
import "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons"; 


import RegistrationScreen from '../Screens/RegistrationScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../Screens/PostScreen";
import LoginScreen from '../Screens/LoginScreen';
import { BottomNavigator } from './BottomNavigator';
import { CommentsScreen } from '../Screens/CommentsScreen';
import { MapScreen } from '../Screens/MapScreen';


export const MainNavigator = () => {
   const MainStack = createStackNavigator()
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            headerTitle: "Коментарі",
            headerTitleAlign: "center",
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
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
  
}
