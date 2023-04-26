import React from "react";
import { View, Text, StyleSheet } from "react-native";
export function Characters() {
  return (
    <View style={styles.container}>
      <Text style={styles.textCharacters}>Characters</Text>
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
  textCharacters: { color: "#8bcf21" },
});
