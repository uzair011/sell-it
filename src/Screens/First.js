import React from "react";
import { Button, SafeAreaView, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

function First(props) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Press me"
          onPress={() => console.log("Simple Button pressed")}
        />
      </View>
    </SafeAreaView>
  );
}

export default First;
