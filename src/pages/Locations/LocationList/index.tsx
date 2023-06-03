import React, { useEffect } from "react";
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
import { Octicons } from "@expo/vector-icons";

interface Params {
  location: LocationCard;
}

export function LocationList({ navigation }) {
  const route = useRoute();
  const { location } = route.params as Params;
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.locationIcon}
        onPress={() => {
          navigation
            .getParent()
            .setOptions({
              tabBarStyle: {
                position: "absolute",
                backgroundColor: "#000000",
                borderTopWidth: 0,
                bottom: 14,
                left: 14,
                right: 14,
                borderRadius: 5,
                display: "flex",
              },
            });
          navigation.goBack();
        }}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.viewName}>
        <Text style={styles.locationName}>{location.name}</Text>
      </View>
      <View style={styles.locationView}>
        <View style={styles.locationInfo}>
          <Text style={styles.infoTextLocation}>Information of locations</Text>
          <TouchableOpacity>
            <Octicons
              style={styles.iconLocation}
              name="feed-star"
              size={28}
              color="#8bcf21"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.locationStyle}>
          <Text style={styles.locationText}>{`Id: ${location.id}`}</Text>
          <Text style={styles.locationText}>{`Type: ${location.type}`}</Text>
          <Text style={styles.locationText}>{location.dimension}</Text>
        </View>
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
    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  locationInfo: {
    top: "15%",
    width: 300,
    height: 50,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#8bcf21",
    flexDirection: "row",
  },
  infoTextLocation: {
    color: "#8bcf21",
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Creepster_400Regular",
  },
  iconLocation: { padding: 8, left: 2 },

  locationStyle: {
    top: "35%",
    width: 280,
    height: 200,
    backgroundColor: "#202020",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  locationText: {
    color: "#8bcf21",
    alignSelf: "center",
    fontWeight: "bold",
    padding: 5,
    fontSize: 18,
  },
});
