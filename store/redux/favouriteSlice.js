import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,

  reducers: {
    addToFavouriteMeals: (state, action) => {
      state.ids.push(action.payload.id);
    },

    deleteFromFavouriteMeals: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export default favouriteSlice.reducer;

export const { addToFavouriteMeals, deleteFromFavouriteMeals } =
  favouriteSlice.actions;
