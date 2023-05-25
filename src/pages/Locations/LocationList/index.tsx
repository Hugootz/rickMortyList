import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export function LocationList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.locationIcon}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.locationView}>
        <Text style={styles.locationText}>Location List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  locationIcon: {
    flex: 1,
    backgroundColor: "#202020",
    top: 70,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  locationView: {
    flex: 3,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 80,
  },
  locationText: { color: "#8bcf21", top: 80, alignSelf: "center" },
});
