import React from "react";
import { View, Text, StyleSheet } from "react-native";
export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHome}>Rick and Morty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    alignItems: "center",
  },
  textHome: { color: "#8bcf21", marginTop: "30%" },
});

// como chamar api em uma lista?
