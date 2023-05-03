import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Creepster_400Regular } from "@expo-google-fonts/creepster";
export function Locations() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({ Creepster_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
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
