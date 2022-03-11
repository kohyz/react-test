import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {}
});

// should wrap other components
// passes data through component tree without needing to pass through props, global var
export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  function addFavouriteHandler(favouriteMeetup) {
    // state not instant, scheduled update -> dont use setUserFavourites(userFavourites.concat(favouriteMeetup))
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavouriteHandler(meetupId) {
    // return true if 1 element matches in the arary
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;