import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { ListCard } from "./ListCard";
import { useFavoriteContext } from "../Contexts/Context";
import { CharactersCard } from "../pages/Characters";

export function Favorites({ navigation }) {
  const { favorites } = useFavoriteContext();

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
  }, []);
  function handleFavorites(character: CharactersCard) {
    navigation.navigate("CharactersList", { character });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            navigation.getParent().setOptions({
              tabBarStyle: {
                position: "absolute",
                backgroundColor: "#000000",
                borderTopWidth: 0,
                bottom: 14,
                left: 14,
                right: 14,
                borderRadius: 5,
                display: "flex",
              },
            }),
              navigation.goBack();
          }}
          style={styles.iconModal}
        >
          <Entypo
            style={styles.iconBack}
            name="back"
            size={35}
            color="#8bcf21"
          />
        </TouchableOpacity>
        <Text style={styles.modalText}>Favoritos</Text>
      </View>

      <View style={styles.iconView}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="movie-open-star-outline"
          size={35}
          color="#8bcf21"
        />

        <FlatList
          key={"favorite"}
          numColumns={2}
          data={favorites}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ListCard
              onPress={() => handleFavorites(item)}
              style={{
                backgroundColor: "#3f3f3f",
                padding: 10,
                width: 200,
                height: 230,
              }}
              data={item.name}
              image={item.image}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    textAlign: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#202020",
  },
  modalIcon: { left: 15, top: 15 },
  iconView: {
    flex: 4,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 100,
    borderTopWidth: 2,
    borderTopColor: "#8bcf21",
  },
  icon: { alignSelf: "center", top: -52, right: 25 },
  iconModal: { padding: 10 },
  iconBack: { top: 50, left: 8 },
  modalText: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    fontSize: 35,
    top: "31%",
    margin: 10,
  },
});
