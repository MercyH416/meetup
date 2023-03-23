import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoritesMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorites: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoritesMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritesMeetup);
    });
  }

  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
