import React from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
// local
import { TextInput } from "react-native-paper";
// dependencies
import { SafeAreaView } from "react-native-safe-area-context";

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hi, Stranger</Text>
        <Text>Welcome to my youtube channel</Text>
      </View>
      {/* <TextInput style={styles.input} placeholder="search" inlineImageLeft="" /> */}
      <TextInput
        label="Search"
        right={<TextInput.Icon name="arrow-right-box" />}
      />
      <Text>Symptoms</Text>

      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DetailsScreen;
