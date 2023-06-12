import React, { useContext, createContext, useState } from "react";
import { RickMortyProps } from "../services/RickMortyProps";
export const FavoriteContext = createContext({});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState<RickMortyProps[]>([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}
export function useFavoriteContext() {
  const { favorites, setFavorites }: any = useContext(FavoriteContext);

  function AddFavorites(newFavorites) {
    //verificar se item favorito repitido
    const repeatedfavorites = favorites.some(
      (item) => item.id === newFavorites.id
    );

    //Verificar se não tem repetidos e adicionar um novo item a lista
    let newList = [...favorites];
    if (!repeatedfavorites) {
      newList.push(newFavorites);
      return setFavorites(newList);
    }
    // Se for repetido ele será retirado da lista
    newList = favorites.filter((fav) => fav.id !== newFavorites.id);
    return setFavorites(newList);
  }
  return { favorites, AddFavorites };
}
