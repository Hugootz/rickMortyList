import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export function ListCard({ data, image }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.imageList} source={{ uri: image }} />
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
  imageList: { width: 100, height: 100 },
});
