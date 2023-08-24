import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Bg.jpg")}
    >
      <View style={styles.form}>
        <Text style={styles.Hform}>Увійти</Text>
        
        <TextInput placeholder="Адреса електронної пошти" style={styles.inp} />
        <TextInput placeholder="Пароль" style={styles.inp} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Зареєстуватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Item}>
          <Text style={styles.ItemText}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
  form: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingBottom: 45,
    borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    paddingTop:45
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
});
