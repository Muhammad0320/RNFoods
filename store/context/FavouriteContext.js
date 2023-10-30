import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext({
  ids: [],
  removeFavourite: () => {},
  addFavourite: () => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMeals, setFavouriteMeals] = useState([]);

  const addToFavourite = (id) => {
    setFavouriteMeals((favIds) => [...favIds, id]);
  };

  const removeFromFavourite = (id) => {
    setFavouriteMeals((favIds) => favIds.filter((favId) => favId !== id));
  };

  return (
    <FavouriteContext.Provider
      value={{
        ids: favouriteMeals,
        addFavourite: addToFavourite,
        removeFavourite: removeFromFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export const useFavourite = () => {
  const context = useContext(FavouriteContext);

  if (!context)
    throw new Error("Context was used outside the context provider");

  return context;
};

export default FavouriteContextProvider;
