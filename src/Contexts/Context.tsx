import React, { useContext, createContext, useState, useEffect } from "react";
import { RickMortyProps } from "../Services/RickMortyProps";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoriteContext = createContext({});
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState<RickMortyProps[]>([]);

  useEffect(() => {
    loadStorage();
  }, []);

  async function loadStorage() {
    const load = await AsyncStorage.getItem("@Favorites");
    if (load) {
      setFavorites(JSON.parse(load));
      console.log(load);
    }
  }

  async function favoriteStorage(favorite) {
    try {
      await AsyncStorage.setItem("@Favorites", JSON.stringify(favorite));
      setFavorites(favorite);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FavoriteContext.Provider value={{ favorites, favoriteStorage }}>
      {children}
    </FavoriteContext.Provider>
  );
}
export function useFavoriteContext() {
  const { favorites, favoriteStorage }: any = useContext(FavoriteContext);

  function addFavorites(newFavorites) {
    //verificar se item favorito repitido
    const repeatedfavorites = favorites.some(
      (item) => item.id === newFavorites.id
    );

    //Verificar se não tem repetidos e adicionar um novo item a lista
    let newList = [...favorites];
    if (!repeatedfavorites) {
      newList.push(newFavorites);
      return favoriteStorage(newList);
    }
    // Se for repetido ele será retirado da lista
    newList = favorites.filter((fav) => fav.id !== newFavorites.id);
    return favoriteStorage(newList);
  }
  return { favorites, addFavorites };
}
