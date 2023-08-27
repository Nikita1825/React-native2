import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
 
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
import { useState } from "react";

export default function RegistrationScreen() {

   const [login, setLogin] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = () =>{
    const form = {
      login, email, password
    };
    setLogin('');
    setEmail('');
    setPassword('');
    console.log(form)
}

 


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
          <ImageBackground
            style={styles.container}
            source={require("../assets/Bg.jpg")}
          >
            <View style={styles.form}>
              <View style={styles.avatar}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color="black"
                  style={styles.addAvatar}
                />
              </View>
              <Text style={styles.Hform}>Реєстрація</Text>

              <TextInput
                placeholder="Логін"
                style={[styles.inp, isFocused && styles.focusedInput]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={setLogin}
                value={login}
              />
              <TextInput
                placeholder="Адреса електронної пошти"
                style={[styles.inp, isFocused && styles.focusedInput]}
                onFocus={() => setIsFocused(true)}
                onChangeText={setEmail}
                value={email}
              />
              <TextInput
                placeholder="Пароль"
                style={[styles.inp, isFocused && styles.focusedInput]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
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
              <TouchableOpacity style={styles.Item}>
                <Text style={styles.ItemText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
       
      </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
  focusedInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
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
  showPassword: {
    position: "relative",
    left: 140,
    bottom: 47,
  },
  ItemText: {
    fontSize: 16,
    color: "#1B4371",
    lineHeight:18.75
  },
});