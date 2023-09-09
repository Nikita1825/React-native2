import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";


export default function LoginScreen() {
   const [login, setLogin] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

    
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

    const handleRegistration = () => {
      const form = {
        
        email,
        password,
      };
     
      setEmail("");
      setPassword("");
      navigation.navigate("Home");
      console.log(form);
  };
  const navigation = useNavigation();
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.wraper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -130}
      >
        <ImageBackground
          style={styles.container}
          source={require("../assets/Bg.jpg")}
        >
          <View style={styles.form}>
            <Text style={styles.Hform}>Увійти</Text>

            <TextInput
              placeholder="Адреса електронної пошти"
              style={[styles.inp, isEmailFocused && styles.focusedInput]}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              placeholder="Пароль"
              style={[styles.inp, isPasswordFocused && styles.focusedInput]}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <View style={styles.showPassword}>
              <TouchableOpacity
                style={styles.showbtn}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.ItemText}>
                  {showPassword ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleRegistration}>
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Item}
              onPress={() => navigation.navigate("Registration")}
            >
              <Text style={styles.ItemText}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  wraper: {
    flex: 1,
  },
  inp: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 10,

    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 45,
  },
  btn: {
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
    marginTop: 27,
  },
  btnText: {
    color: "white",
  },
  Hform: {
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 36.16,
    color: "black",
  },
  avatar: {
    backgroundColor: "#F6F6F6",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 32 - 60,
  },
  addAvatar: {
    position: "absolute",
    right: -12,
    bottom: 14,
    color: "#FF6C00",
  },
  focusedInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  showPassword: {
    position: "relative",
    left: 140,
    bottom: 47,
  },
  ItemText: {
    fontSize: 16,
    color: "#1B4371",
    lineHeight: 18.75,
  },
});
