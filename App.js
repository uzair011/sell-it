import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed.");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Salam uadsfzair!</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableNativeFeedback onPress={() => console.log("Image tapped.")}>
        <View
          style={{ width: 200, height: 100, backgroundColor: "green" }}
        ></View>
        {/* <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
