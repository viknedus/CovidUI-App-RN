import React from "react";
import { View, Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View></View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
export default DetailsScreen;
