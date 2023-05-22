import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function AnotherList({ data, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textList}>{data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    backgroundColor: "#202020",
    borderRadius: 5,
    margin: 10,
    padding: 31,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  textList: {
    color: "#8bcf21",
    fontWeight: "bold",
    fontSize: 15,
  },
});
