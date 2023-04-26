import React from "react";
import { View, Text, StyleSheet } from "react-native";
export function Locations() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLocations}>Locations</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textLocations: { color: "#8bcf21" },
});
