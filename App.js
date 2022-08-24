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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";

export default function App() {
  //const handlePress = () => console.log("text pressed.");
  //console.log(Dimensions.get("screen"));
  //console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();

  //return <WelcomeScreen />;
  return <ViewImageScreen />;
}

const containerStyles = { backgroundColor: "pink" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "lightblue",
    //justifyContent: "center",
    alignItems: "center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
