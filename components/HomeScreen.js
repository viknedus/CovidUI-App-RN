import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
// dependencies
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.backgroundColor}
        colors={["rgba(0,0,0,0.8)", "transparent"]}
      >
        <View style={styles.top}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/home/man.png")}
          />
        </View>
        <View style={styles.middle}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Home Screen
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingLeft: 10,
              paddingRight: 10,
              color: "white",
            }}
          >
            Here is our new shot to raise awareness for the corona virus. Please
            stay home, stay safe
          </Text>
        </View>
        <View style={styles.bottom}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Details")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <MaterialCommunityIcons name="page-next" size={24} color="black" />
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "orange",
  },
  backgroundColor: {
    height: Dimensions.get("window").height,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  top: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flex: 0.1,
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
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 35,
    borderRadius: 5,
    elevation: 6,
    backgroundColor: "white",
    // ---
    shadowColor: "rgba(0, 0, 0, 0.9))",
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
  },
});
