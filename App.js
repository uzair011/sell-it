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
  Button,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed.");
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={containerStyles}>
      <Button
        title="click me"
        onPress={() => {
          Alert.alert("MyTitle", "The Message...", [
            { text: "OK", onPress: () => console.log("You clicked yes") },
            { text: "Nope", onPress: () => console.log("You clicked No") },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const containerStyles = { backgroundColor: "pink" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
