import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  Image,
} from "react-native";
// local
import { TextInput } from "react-native-paper";
// dependencies
import { SafeAreaView } from "react-native-safe-area-context";

// section data
const SECTIONS = {
  title: "Made for you",
  // horizontal: true,
  data: [
    {
      key: "1",
      text: "Item text 1",
      uri: "https://picsum.photos/id/1/200",
    },
    {
      key: "2",
      text: "Item text 2",
      uri: "https://picsum.photos/id/10/200",
    },

    {
      key: "3",
      text: "Item text 3",
      uri: "https://picsum.photos/id/1002/200",
    },
    {
      key: "4",
      text: "Item text 4",
      uri: "https://picsum.photos/id/1006/200",
    },
    {
      key: "5",
      text: "Item text 5",
      uri: "https://picsum.photos/id/1008/200",
    },
  ],
};

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

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
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <FlatList
              horizontal
              data={section.data}
              renderItem={({ item }) => <ListItem item={item} />}
              showsHorizontalScrollIndicator={false}
            />
          </>
        )}
        renderItem={({ item, section }) => {
          return null;
          // return <ListItem item={item} />;
        }}
      />

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
