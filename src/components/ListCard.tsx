import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function ListCard({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textList}>{data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6f6f6f",
    margin: 10,
    padding: 30,

    borderRadius: 8,
  },
  textList: { color: "#fff", fontWeight: "bold" },
});
