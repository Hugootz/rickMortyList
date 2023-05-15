import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export function FavoriteModal() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.modalText}>favoritos</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",

    alignItems: "center",
  },

  content: {
    marginTop: "15%",
    marginRight: "53%",
    top: -10,
  },
  modalText: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    fontSize: 35,
  },
});
