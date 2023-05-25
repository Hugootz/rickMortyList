import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export function EpisodeList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.episodeIcon}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.episodeView}>
        <Text style={styles.episodeText}>Episode List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#202020",
  },
  episodeIcon: {
    flex: 1,
    backgroundColor: "#202020",
    top: 70,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  episodeView: {
    flex: 3,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 80,
  },
  episodeText: { color: "#8bcf21", top: 80, alignSelf: "center" },
});
