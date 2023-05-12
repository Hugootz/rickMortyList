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
    backgroundColor: "#202020",
    borderRadius: 10,

    padding: 16,
  },
  textList: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    alignSelf: "center",
    margin: 5,
  },
  imageList: { width: 170, height: 170, alignSelf: "center", borderRadius: 10 },
});
