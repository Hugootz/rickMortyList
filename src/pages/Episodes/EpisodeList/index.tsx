import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export function EpisodeList() {
  return (
    <View style={styles.container}>
      <Text>Episode List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
