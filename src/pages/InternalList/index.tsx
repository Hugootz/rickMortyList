import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export function InternalList() {
  return (
    <View style={styles.container}>
      <Text>Internal List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
