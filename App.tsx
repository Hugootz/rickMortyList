import React from "react";
import AppRoutes from "./src/Routes/app.Routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#202020" translucent={true} />
      <AppRoutes />
    </NavigationContainer>
  );
}
