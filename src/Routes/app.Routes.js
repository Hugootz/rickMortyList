import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Episodes } from "../pages/Episodes";
import { Characters } from "../pages/Characters";
import { Locations } from "../pages/Locations";
import { Home } from "../pages/Home";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8bcf21",
        tabBarInactiveTintColor: "#fff",
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="people-sharp" size={size} color={color} />;
            }
            return <Ionicons name="people-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={Episodes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="albums" size={size} color={color} />;
            }
            return <Ionicons name="albums-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="planet" size={size} color={color} />;
            }
            return <Ionicons name="planet-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
