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
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./src/Screens/WelcomeScreen";
import ViewImageScreen from "./src/Screens/ViewImageScreen";
import Navigator from "./src/routes/navigator";
import First from "./src/Screens/First";

export default function App() {
  //const handlePress = () => console.log("text pressed.");
  //console.log(Dimensions.get("screen"));
  //console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();

  //return <WelcomeScreen />;
  //return <ViewImageScreen />;
  //return <First />;
  return (
    <NavigationContainer>
      <WelcomeScreen />
    </NavigationContainer>
  );
}

// const App = () => {
//   return (
//     <NavigationContainer>
//       <WelcomeScreen />
//     </NavigationContainer>
//   );
// };

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
