import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../Services/api";
import { ListCard } from "../../components/ListCard";
import { DismissKeyboard } from "../../components/DismissKeyboard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../Routes/app.Routes";
import * as Animatable from "react-native-animatable";
import { Load } from "../../components/Load";

type CharactersScreen = NativeStackNavigationProp<
  RootStackParamsList,
  "Characters"
>; // importação das tipagem, passando o 'nativestacknavigationprop' listando as propriedades de cada tela
//    e passando o 'type' que foi importado de 'routes', tendo que passar a tela em que está como parâmetro!

export interface CharactersCard {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export function Characters() {
  const [list, setList] = useState<CharactersCard[]>([]);
  const [seek, setSeek] = useState<CharactersCard[]>([]);
  const [loading, setLoading] = useState(true);
  async function getCharacters() {
    try {
      const dataC = await api.get("/character");
      setSeek(dataC.data.results), setList(dataC.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCharacters();
  }, []);
  function search(filter) {
    let arr = JSON.parse(JSON.stringify(seek));

    setList(arr.filter((dice) => dice.name.includes(filter)));
  }
  const navigation = useNavigation<CharactersScreen>();
  // Agora é só tipar o seu hook de navegação e pronto!
  // seu erro de tipagem irá sumir! :)

  function handleCharactersList(character: CharactersCard) {
    navigation.navigate("CharactersList", { character });
  }
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SafeAreaView>
          <Animatable.Text
            animation={"slideInDown"}
            style={styles.textCharacters}
          >
            Characters
          </Animatable.Text>

          <TextInput
            onChangeText={(filter) => search(filter)}
            placeholder="Find the character"
            placeholderTextColor="#8bcf21"
            style={styles.inputCharacters}
          />
          {loading ? (
            <Load />
          ) : (
            <FlatList
              numColumns={2}
              key={"1"}
              showsVerticalScrollIndicator={false}
              data={list}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <ListCard
                  data={item.name}
                  image={item.image}
                  onPress={() => handleCharactersList(item)}
                />
              )}
            />
          )}
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
    marginRight: "48%",
    top: -15,
  },

  inputCharacters: {
    padding: 10,
    backgroundColor: "#3f3f3f",
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 80,
    color: "#8bcf21",
    textAlign: "center",
  },
});
