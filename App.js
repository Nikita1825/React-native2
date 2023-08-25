import { Button, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/PostsScreen/LoginScreen';
import RegistrationScreen from './src/PostsScreen/RegistrationScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen/> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});