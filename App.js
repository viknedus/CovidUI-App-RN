import { StatusBar } from "expo-status-bar";
import React from "react";
// components
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
// dependencies
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
