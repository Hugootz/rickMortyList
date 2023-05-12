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
import api from "../../services/api";
import { AnotherList } from "../../components/AnotherList";

interface LocationCard {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export function Locations() {
  const [locations, setLocations] = useState<LocationCard[]>([]);
  async function getLocation() {
    try {
      const dataL = await api.get("/location");
      setLocations(dataL.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.textLocations}>Localizações</Text>
          <TextInput
            placeholder="Encontre a localização"
            placeholderTextColor="#8bcf21"
            style={styles.inputLocations}
          />
          <FlatList
            key={"3"}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={locations}
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
  textLocations: {
    color: "#8bcf21",
    fontFamily: "Creepster_400Regular",
    marginTop: "25%",
    fontSize: 35,
    marginRight: "45%",
    top: -15,
  },
  inputLocations: {
    padding: 10,
    backgroundColor: "#3f3f3f",
    paddingHorizontal: 80,
    borderRadius: 10,
    elevation: 20,
    color: "#8bcf21",
    textAlign: "center",
  },
});
