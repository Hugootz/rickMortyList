import React from "react";
import AppRoutes from "./src/Routes/app.Routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Creepster_400Regular } from "@expo-google-fonts/creepster";
export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({ Creepster_400Regular });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#202020" translucent={true} />
      <AppRoutes />
    </NavigationContainer>
  );
}
