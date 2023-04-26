import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Episodes } from "../pages/Episodes";
import { Characters } from "../pages/Characters";
import { Locations } from "../pages/Locations";
import { Home } from "../pages/Home";
import {} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000000",
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          borderRadius: 5,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Characters" component={Characters} />
      <Tab.Screen name="Episodes" component={Episodes} />
      <Tab.Screen name="Locations" component={Locations} />
    </Tab.Navigator>
  );
}

export default AppRoutes;
