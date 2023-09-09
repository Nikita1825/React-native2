import "react-native-gesture-handler";
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "./src/Screens/PostScreen";


export default function App() {
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
          component={PostScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});