import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { DismissKeyboard } from "../../components/DismissKeyboard";
import { AnotherList } from "../../components/AnotherList";
import api from "../../Services/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../Routes/app.Routes";
import * as Animatable from "react-native-animatable";

type EpisodeScreen = NativeStackNavigationProp<RootStackParamsList, "Episodes">;

export interface EpisodeCard {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export function Episodes() {
  const [episodes, setEpisodes] = useState<EpisodeCard[]>([]);
  const [seek, setSeek] = useState<EpisodeCard[]>([]);
  const [loading, setLoading] = useState(true);
  async function getEpisodes() {
    try {
      const dataE = await api.get("/episode");
      setSeek(dataE.data.results), setEpisodes(dataE.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEpisodes();
  }, []);
  function search(filter) {
    let arr = JSON.parse(JSON.stringify(seek));

    setEpisodes(arr.filter((dice) => dice.name.includes(filter)));
  }
  const navigation = useNavigation<EpisodeScreen>();
  function handleEpisodeList(episode: EpisodeCard) {
    navigation.navigate("EpisodeList", { episode });
  }
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SafeAreaView>
          <Animatable.Text
            animation={"slideInDown"}
            style={styles.textEpisodes}
          >
            Episódios
          </Animatable.Text>

          <TextInput
            onChangeText={(filter) => search(filter)}
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
            renderItem={({ item }) => (
              <AnotherList
                onPress={() => handleEpisodeList(item)}
                data={item.name}
              />
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
    elevation: 80,
    color: "#8bcf21",
    textAlign: "center",
  },
});
