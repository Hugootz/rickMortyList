import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { DismissKeyboard } from "../../components/DismissKeyboard";
import { AnotherList } from "../../components/AnotherList";
import api from "../../services/api";

interface EpisodeCard {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export function Episodes() {
  const [episodes, setEpisodes] = useState<EpisodeCard[]>([]);

  async function getEpisodes() {
    try {
      const dataE = await api.get("/episode");
      setEpisodes(dataE.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.textEpisodes}>Episódios</Text>
          <TextInput
            placeholder="Encontre o episódio"
            placeholderTextColor="#8bcf21"
            style={styles.inputEpisodes}
          />
          <FlatList
            key={"2"}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={episodes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <AnotherList data={item.name} />}
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
  textEpisodes: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    marginTop: "25%",
    fontSize: 35,
    marginRight: "55%",
    top: -15,
  },
  inputEpisodes: {
    padding: 10,
    backgroundColor: "#3f3f3f",
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 20,
    color: "#8bcf21",
    textAlign: "center",
  },
});
