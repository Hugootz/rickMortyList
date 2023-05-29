import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Episodes } from "../pages/Episodes";
import { Characters } from "../pages/Characters";
import { Locations } from "../pages/Locations";
import { Home } from "../pages/Home";
import { CharactersList } from "../pages/Characters/CharactersList";
import { Ionicons } from "@expo/vector-icons";
import { EpisodeList } from "../pages/Episodes/EpisodeList";
import { LocationList } from "../pages/Locations/LocationList";

export type RootStackParamsList = {
  Episodes: undefined;
  EpisodeList: undefined;
  Characters: any;
  CharactersList: any;
  Locations: undefined;
  LocationList: undefined;
}; // tipagem das rotas de tab e stack navigation, coloquei 'any' para rotas com parâmetros
//    e 'undefined' para rotas sem parâmetros!

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CharactersScreen" component={Characters} />
      <Stack.Screen name="CharactersList" component={CharactersList} />
    </Stack.Navigator>
  );
}
export function EpisodeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EpisodeScreen" component={Episodes} />
      <Stack.Screen name="EpisodeList" component={EpisodeList} />
    </Stack.Navigator>
  );
}
export function LocationStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LocationScreen" component={Locations} />
      <Stack.Screen name="LocationList" component={LocationList} />
    </Stack.Navigator>
  );
}
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
        component={MyStack}
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
        component={EpisodeStack}
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
        component={LocationStack}
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
