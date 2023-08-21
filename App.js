import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Keyboard } from "react-native";
import { Registration } from "./screens/RegistrationScreen";
import { Login } from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import { TouchableWithoutFeedback } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./image/PhotoBG.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Registration />
          {/* <Login/> */}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

