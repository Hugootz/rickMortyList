import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import api from "../../services/api";
import { ListCard } from "../../components/ListCard";
import { DismissKeyboard } from "../../components/DismissKeyboard";

export function Characters() {
  const [list, setList] = useState([]);

  async function getCharacters() {
    try {
      const data = await api.get("/character");
      setList(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.textCharacters}>Personagens</Text>
          <TextInput
            placeholder="Encontre o personagem"
            placeholderTextColor="#8bcf21"
            style={styles.inputCharacters}
          />
          <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.renderView}>
                <Text style={styles.renderText}>{item}</Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    </DismissKeyboard>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    alignItems: "center",
  },
  textCharacters: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    marginTop: "25%",
    fontSize: 35,
    marginRight: "43%",
    top: -15,
  },
  inputCharacters: {
    padding: 10,
    backgroundColor: "#3f3f3f",
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 20,
    color: "#8bcf21",
    textAlign: "center",
  },
  renderView: { flex: 1, backgroundColor: "#fff" },
  renderText: {},
});
