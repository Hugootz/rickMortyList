import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Creepster_400Regular } from "@expo-google-fonts/creepster";
export function Home() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({ Creepster_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <Text style={styles.textHome}>Rick and Morty</Text>
      <Image
        source={require("../../assets/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png")}
        style={{ width: "70%", height: "50%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    alignItems: "center",
  },
  textHome: {
    color: "#8bcf21",
    marginTop: "20%",
    fontFamily: "Creepster_400Regular",
    fontSize: 50,
  },
});
