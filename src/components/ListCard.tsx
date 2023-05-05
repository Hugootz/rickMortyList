import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function ListCard({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textList}>{data}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  textList: { color: "#000" },
});
