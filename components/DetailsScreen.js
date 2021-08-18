import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
// local
import { TextInput, Surface } from "react-native-paper";
// dependencies
import { SafeAreaView } from "react-native-safe-area-context";

const _renderItem = ({ item }) => (
  <View style={styles.symptomsView}>
    <Text style={{ color: "white" }}>{item.key}</Text>
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/favicon.png")}
    />
  </View>
);

const _renderItems1 = ({ item }) => (
  <View style={styles.requirementsView}>
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/favicon.png")}
    />
  </View>
);

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <View>
          <FlatList
            data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
            renderItem={_renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            alwaysBounceHorizontal
            ItemSeparatorComponent={() => <View style={{ margin: 4 }} />}
          />
        </View>

        <Surface style={styles.surface}>
          <Text>Stay at home to stop corona virus</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Know More</Text>
          </Pressable>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/home/man.png")}
          />
        </Surface>

        <Text>Requirements</Text>
        <View>
          <FlatList
            data={[{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }]}
            renderItem={_renderItems1}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            alwaysBounceHorizontal
            ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
          />
        </View>

        <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  symptomsView: {
    padding: 16,
    backgroundColor: "blue",
    height: 100,
    width: Dimensions.get("window").width / 2,
    borderRadius: 10,
  },
  requirementsView: {
    padding: 16,
    backgroundColor: "blue",
    height: 90,
    width: Dimensions.get("window").width / 4,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  surface: {
    backgroundColor: "grey",
    padding: 8,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 4,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  button: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "pink",
  },
});

export default DetailsScreen;
