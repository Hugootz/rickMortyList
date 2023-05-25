import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export function InternalListCard({}) {
  return (
    <View style={styles.container}>
      <Image style={styles.internalImage} source={{}} />
      <Text style={styles.internalText}>Rick Sanchez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8bcf21",
    borderRadius: 10,

    width: "30%",
    height: "30%",
  },
  internalImage: {
    flex: 1,

    borderRadius: 10,
  },
  internalText: {},
});
