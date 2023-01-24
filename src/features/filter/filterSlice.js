import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularity: { value: "None", maxRating: 0, minRating: 0 },
  countries: {
    value: "Default",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.countries.value = action.payload.value;
    },
    setPopularity: (state, action) => {
      state.popularity.value = action.payload.value;
      state.popularity.maxRating = action.payload.maxRating;
      state.popularity.minRating = action.payload.minRating;
    },
  },
});

export const { setCountry, setPopularity } = filterSlice.actions;
export const selectCountries = (state) => state.filter.countries.value;
export const selectPopularity = (state) => state.filter.popularity;
export default filterSlice.reducer;
