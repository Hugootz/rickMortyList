import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import api from "../../../services/api";
import { useRoute } from "@react-navigation/native";
import { CharactersCard } from "../../Characters";

interface Params {
  id: CharactersCard;
}

export function CharactersList({ navigation }) {
  const route = useRoute();
  const { id } = route.params as Params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.CharactersIcon}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.charactersView}>
        <Image source={{}} />
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  CharactersIcon: {
    flex: 1,
    backgroundColor: "#202020",
    top: 70,

    alignSelf: "flex-start",
    marginLeft: 20,
  },
  charactersView: {
    flex: 3,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 80,
    alignItems: "center",
  },
  charactersText: { color: "#8bcf21", top: 80, alignSelf: "center" },
});
