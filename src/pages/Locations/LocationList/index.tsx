import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { LocationCard } from "../../Locations";

interface Params {
  location: LocationCard;
}

export function LocationList({ navigation }) {
  const route = useRoute();
  const { location } = route.params as Params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.locationIcon}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.viewName}>
        <Text style={styles.locationName}>{location.name}</Text>
      </View>
      <View style={styles.locationView}>
        <Text style={styles.locationText}>{location.id}</Text>
        <Text style={styles.locationText}>{location.type}</Text>
        <Text style={styles.locationText}>{location.dimension}</Text>
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
  viewName: { position: "absolute", alignSelf: "center" },
  locationName: {
    color: "#8bcf21",
    top: 150,
    fontFamily: "Creepster_400Regular",
    fontSize: 33,
    borderWidth: 2,
    borderColor: "#8bcf21",
    borderRadius: 10,
    padding: 10,
  },
  locationView: {
    flex: 2,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 80,
  },
  locationText: { color: "#8bcf21", top: 80, alignSelf: "center" },
});
