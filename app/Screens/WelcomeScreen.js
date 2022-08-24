// rsf
// rnss
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/backgroundImage.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.name}>Welcome to SellIt</Text>
      </View>
      <View style={styles.loginButton}></View>
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
});

export default WelcomeScreen;
