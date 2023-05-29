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

import { useRoute } from "@react-navigation/native";
import { CharactersCard } from "../../Characters";

interface Params {
  character: CharactersCard;
}

export function CharactersList({ navigation }) {
  const route = useRoute();
  const { character } = route.params as Params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.CharactersIcon}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.charactersView}>
        <View style={styles.rickView}>
          <Image
            style={styles.characterImage}
            source={{ uri: character.image }}
          />
          <Text style={styles.rickText}>{character.name}</Text>
        </View>
        <View style={styles.rickInfo}>
          <Text style={styles.textId}>{`Id: ${character.id}`}</Text>
          <Text style={styles.textStatus}>{`Status: ${character.status}`}</Text>
          <Text
            style={styles.textSpecies}
          >{`Species: ${character.species}`}</Text>
          <Text style={styles.textGender}>{`Gender: ${character.gender}`}</Text>
        </View>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    elevation: 80,
    alignItems: "center",
  },
  rickView: {
    position: "absolute",
    top: -100,
    alignItems: "center",
    elevation: 50,
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  rickText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  rickInfo: {
    top: 200,
    width: 350,
    height: 250,
    backgroundColor: "#232323",
    borderRadius: 30,
    justifyContent: "center",
    margin: 10,
    borderWidth: 2,
    borderColor: "#8bcf21",
  },
  textId: {
    color: "#8bcf21",
    alignSelf: "center",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  textStatus: {
    color: "#8bcf21",
    alignSelf: "center",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  textSpecies: {
    color: "#8bcf21",
    alignSelf: "center",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  textGender: {
    color: "#8bcf21",
    alignSelf: "center",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  charactersText: { color: "#8bcf21", top: 80, alignSelf: "center" },
});
