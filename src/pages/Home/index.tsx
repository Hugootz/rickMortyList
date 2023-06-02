import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { FavoriteModal } from "../../components/FavoriteModal";
import * as Animatable from "react-native-animatable";
export function Home() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <Animatable.Text
        delay={400}
        animation={"lightSpeedIn"}
        style={styles.textHome}
      >
        Rick and Morty
      </Animatable.Text>
      <Animatable.Image
        delay={500}
        animation={"zoomIn"}
        source={require("../../assets/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png")}
        style={{ width: "70%", height: "50%" }}
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
          <Text style={styles.buttonText}> favoritos </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modal} onRequestClose={() => setModal(false)}>
        <FavoriteModal />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    alignItems: "center",
  },
  textHome: {
    color: "#8bcf21",
    marginTop: "20%",
    fontFamily: "Creepster_400Regular",
    fontSize: 50,
  },
  buttonView: { margin: 70 },
  button: {
    backgroundColor: "#202020",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 50,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#8bcf21",
  },
  buttonText: {
    fontFamily: "Creepster_400Regular",
    color: "#8bcf21",
    fontSize: 18,
  },
});
