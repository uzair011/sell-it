// rsf
// rnss
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  function navigateToImageScreen() {
    console.log("Clicked...");
    navigation.navigate("ViewImageScreen");
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../app/assets/backgroundImage.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../app/assets/logo.png")}
        />
        <Text style={styles.name}>Welcome to SellIt</Text>
      </View>
      <View style={styles.loginButton}>
        <Button title="Login" onPress={() => navigateToImageScreen()} />
      </View>
      <View style={styles.signupButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "green",
    width: "100%",
    height: 100,
    //flexDirection: "row-reverse",
  },
  signupButton: {
    backgroundColor: "pink",
    width: "100%",
    height: 100,
  },
  logo: {
    width: 100,
    height: 100,
    //left: 162,
  },
  name: {
    color: "yellow",
    position: "absolute",
    top: 120,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logintext: {
    position: "absolute",
    top: 30,
    left: 150,
  },
});
//export default WelcomeScreen;
