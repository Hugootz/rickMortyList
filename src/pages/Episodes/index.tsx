import React from "react";
import { View, Text, StyleSheet } from "react-native";
export function Episodes() {
  return (
    <View style={styles.container}>
      <Text style={styles.textEpisodes}>Episodes</Text>
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
  textEpisodes: { color: "#8bcf21" },
});
