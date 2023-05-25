import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

export function FavoriteModal() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.modalText}>favoritos</Text>
      </View>

      <View style={styles.iconView}>
        <Octicons
          style={styles.icon}
          name="feed-star"
          size={30}
          color="#8bcf21"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    textAlign: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#202020",
  },
  iconView: {
    flex: 7,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 100,
  },
  icon: { alignSelf: "center", top: -45, right: 25 },
  modalText: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    fontSize: 35,
    top: 38,
    margin: 10,
  },
});
