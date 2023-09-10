import React from 'react'
import "react-native-gesture-handler";


import RegistrationScreen from '../Screens/RegistrationScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../Screens/PostScreen";
import LoginScreen from '../Screens/LoginScreen';
import { BottomNavigator } from './BottomNavigator';

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
      </MainStack.Navigator>
    </NavigationContainer>
  );
  
}
