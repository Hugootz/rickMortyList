import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export function LocationList() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Location List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
