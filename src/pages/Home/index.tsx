import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../Routes/app.Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomeScreen = NativeStackNavigationProp<RootStackParamsList, "Home">;

export function Home() {
  const navigation = useNavigation<HomeScreen>();

  return (
    <View style={styles.container}>
      <Animatable.Text
        delay={400}
        animation={"lightSpeedIn"}
        style={styles.textHome}
      >
        Rick and Morty
      </Animatable.Text>
      <Animatable.Image
        delay={500}
        animation={"zoomIn"}
        source={require("../../assets/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png")}
        style={{ width: "70%", height: "50%" }}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Favorites")}
        >
          <Text style={styles.buttonText}> Favorites </Text>
        </TouchableOpacity>
      </View>
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
  buttonView: { margin: 70 },
  button: {
    backgroundColor: "#202020",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 50,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  buttonText: {
    fontFamily: "Creepster_400Regular",
    color: "#8bcf21",
    fontSize: 23,
  },
});
