import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Creepster_400Regular } from "@expo-google-fonts/creepster";
export function Episodes() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({ Creepster_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <Text style={styles.textEpisodes}>Episódios</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    alignItems: "center",
  },
  textEpisodes: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    marginTop: "25%",
    fontSize: 35,
    marginRight: "55%",
    top: -10,
  },
});
