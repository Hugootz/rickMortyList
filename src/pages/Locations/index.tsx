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
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../Routes/app.Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LocationScreen = NativeStackNavigationProp<
  RootStackParamsList,
  "Locations"
>;

interface LocationCard {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export function Locations() {
  const [locations, setLocations] = useState<LocationCard[]>([]);
  const [seek, setSeek] = useState<LocationCard[]>([]);
  const [loading, setLoading] = useState(true);
  async function getLocation() {
    try {
      const dataL = await api.get("/location");
      setSeek(dataL.data.results), setLocations(dataL.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);
  function search(filter) {
    let arr = JSON.parse(JSON.stringify(seek));

    setLocations(arr.filter((dice) => dice.name.includes(filter)));
  }
  const navigation = useNavigation<LocationScreen>();
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.textLocations}>Localizações</Text>
          <TextInput
            onChangeText={(filter) => search(filter)}
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
            renderItem={({ item }) => (
              <AnotherList
                onPress={() => {
                  navigation.navigate("LocationList");
                }}
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
    elevation: 80,
    color: "#8bcf21",
    textAlign: "center",
  },
});
