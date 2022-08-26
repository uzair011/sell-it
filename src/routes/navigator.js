import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../Screens/WelcomeScreen";
import ViewImageScreen from "../Screens/ViewImageScreen";
import First from "../Screens/First";

const AppStack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <AppStack.Screen name="ViewImageScreen" component={ViewImageScreen} />
        <AppStack.Screen name="First" component={First} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
