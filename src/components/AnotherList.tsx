import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function AnotherList({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textList}>{data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    backgroundColor: "#6f6f6f",
    borderRadius: 5,
    margin: 10,
    padding: 50,
  },
  textList: { color: "#fff", fontWeight: "bold", fontSize: 10 },
});
