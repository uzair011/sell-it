import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colours from "../../app/config/colours";

export default function ViewImageScreen() {
  const navigation = useNavigation();

  function navigateToNextPage() {
    navigation.navigate("First");
  }

  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.nextIcon}>
        <Button title="next" onPress={() => navigateToNextPage()} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../app/assets/girl.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    hight: "100%",
  },
  container: {
    backgroundColor: colours.black,
    flex: 1,
  },
  closeIcon: {
    backgroundColor: colours.primary,
    width: 40,
    height: 30,
    position: "absolute",
    top: 40,
    left: 30,
  },
  nextIcon: {
    backgroundColor: colours.secondary,
    width: 40,
    height: 30,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
//export default ViewImageScreen;
