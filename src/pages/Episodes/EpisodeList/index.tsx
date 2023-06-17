import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { EpisodeCard } from "../../Episodes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Params {
  episode: EpisodeCard;
}

export function EpisodeList({ navigation }) {
  const route = useRoute();
  const { episode } = route.params as Params;

  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.episodeIcon}
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
          });
          navigation.goBack();
        }}
      >
        <Entypo name="back" size={35} color="#8bcf21" />
      </TouchableOpacity>
      <View style={styles.viewName}>
        <Text style={styles.episodeName}>{episode.name}</Text>
      </View>

      <View style={styles.episodeView}>
        <View style={styles.episodeInfo}>
          <Text style={styles.infoText}>Information of episodes</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={styles.iconEpisode}
              name="movie-open-star-outline"
              size={28}
              color="#8bcf21"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.episodeStyle}>
          <Text style={styles.episodeTitle}>{`Id: ${episode.id}`}</Text>
          <Text
            style={styles.episodeTitle}
          >{`Season/Episode: ${episode.episode}`}</Text>
          <Text
            style={styles.episodeTitle}
          >{` Date: ${episode.air_date}`}</Text>
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
  episodeIcon: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginLeft: 20,
    bottom: 60,
  },
  viewName: { position: "absolute", alignSelf: "center" },
  episodeName: {
    color: "#8bcf21",
    top: 150,
    fontFamily: "Creepster_400Regular",
    fontSize: 33,

    borderWidth: 2,
    borderColor: "#8bcf21",
    borderRadius: 10,
    padding: 10,
  },
  episodeInfo: {
    top: "15%",
    width: 300,
    height: 50,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#8bcf21",
    flexDirection: "row",
  },
  infoText: {
    color: "#8bcf21",
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Creepster_400Regular",
  },
  iconEpisode: { padding: 8, bottom: 1, left: 5 },
  episodeView: {
    flex: 2,
    backgroundColor: "#3f3f3f",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 80,
    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  episodeStyle: {
    top: "35%",
    width: 280,
    height: 200,
    backgroundColor: "#202020",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#8bcf21",
  },

  episodeTitle: {
    color: "#8bcf21",
    alignSelf: "center",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
