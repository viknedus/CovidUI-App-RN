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
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
// dependencies
import { SafeAreaView } from "react-native-safe-area-context";

const _renderItem = ({ item }) => (
  <View>
    <LinearGradient
      style={styles.symptoms__view}
      colors={["rgba(4, 26, 84, 1) 0%)", "rgba(82, 36, 36, 0) 100%)"]}
    >
      <Text style={{ color: "white" }}>{item.key}</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/favicon.png")}
      />
    </LinearGradient>
  </View>
);

const _renderItems1 = ({ item }) => (
  <View>
    <LinearGradient
      style={styles.requirements__view}
      colors={["rgba(43, 14, 14, 1) 0%)", "rgba(82, 36, 36, 0) 100%)"]}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/favicon.png")}
      />
    </LinearGradient>
  </View>
);

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title__view}>
          <Text style={styles.title__text}>Hi, Stranger</Text>
          <Text style={styles.title__description}>
            Welcome to my youtube channel
          </Text>
        </View>
        {/* <TextInput style={styles.input} placeholder="search" inlineImageLeft="" /> */}
        <TextInput
          label="Search"
          right={<TextInput.Icon name="arrow-right-box" />}
          style={styles.search__view}
        />

        <Text style={styles.section__titles}>Symptoms</Text>
        <View style={{ margin: 10 }}>
          <FlatList
            data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
            renderItem={_renderItem}
            horizontal={true}
            alwaysBounceHorizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ margin: 6 }} />}
          />
        </View>
        <View style={styles.frame1__view}>
          <LinearGradient
            style={styles.frame1__lineargradientview}
            colors={["rgba(43, 84, 4, 31) 70%)", "rgba(82, 36, 36, 0) 50%)"]}
          >
            <View>
              <Text style={styles.frame1__text}>
                Stay at home to stop corona virus
              </Text>
              <Pressable style={styles.pressable}>
                <Text style={styles.button__text}>Know More</Text>
              </Pressable>
            </View>

            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/home/man.png")}
            />
          </LinearGradient>
        </View>

        <Text style={styles.section__titles}>Requirements</Text>
        <View style={{ margin: 20 }}>
          <FlatList
            data={[{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }]}
            renderItem={_renderItems1}
            horizontal={true}
            alwaysBounceHorizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
          />
        </View>
        <View style={styles.buttons__view}>
          <Button
            title="Go to Details... again"
            onPress={() => navigation.push("Details")}
          />
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  title__view: {
    margin: 20,
    alignItems: "center",
  },
  title__text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  title__description: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  search__view: {
    margin: 30,
    borderRadius: 5,
    shadowRadius: 15,
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.3,
    elevation: 15,
  },
  symptoms__view: {
    padding: 16,
    height: 100,
    width: Dimensions.get("window").width / 2,
    borderRadius: 10,
    /* iOS filter: drop-shadow */
    shadowColor: "rgba(0, 0, 0, 0.5))",
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  requirements__view: {
    padding: 16,
    height: 90,
    width: Dimensions.get("window").width / 5,
    borderRadius: 10,
    alignItems: "center",
    /* iOS filter: drop-shadow */
    shadowColor: "rgba(0, 0, 0, 0.5))",
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  section__titles: {
    margin: 10,
    fontWeight: "bold",
  },
  frame1__view: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  frame1__lineargradientview: {
    padding: 8,
    width: Dimensions.get("screen").width,
    elevation: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    // ---
    borderRadius: 10,
    opacity: 0.9,
    // ---
    marginVertical: 30,
    /* iOS filter: drop-shadow */
    shadowColor: "rgba(0, 0, 0, 0.5))",
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    // Android
    elevation: 5,
  },
  frame1__text: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },
  button__text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  pressable: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 5,
    backgroundColor: "grey",
  },
  buttons__view: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: 20,
  },
});

export default DetailsScreen;
