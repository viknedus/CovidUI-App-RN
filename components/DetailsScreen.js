import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
// local
import { TextInput } from "react-native-paper";
// dependencies
import { SafeAreaView } from "react-native-safe-area-context";

const _renderItem = ({ item }) => (
  <View
    style={{
      padding: 16,
      backgroundColor: "blue",
      height: 100,
      width: Dimensions.get("window").width,
      borderRadius: 10,
    }}
  >
    <Text style={{ color: "white" }}>{item.key}</Text>
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/favicon.png")}
    />
  </View>
);

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
      <View style={{}}>
        <FlatList
          data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
          renderItem={_renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          ItemSeparatorComponent={() => <View style={{ margin: 4 }} />}
        />
      </View>

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
