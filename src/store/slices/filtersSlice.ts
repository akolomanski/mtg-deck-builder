import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color, Filters } from "../../types/mtg-api";
import type { RootState } from "..";


const initialState: Filters = {
  colors: ['B', 'G', 'R', 'U', 'W']
};

export const filtersSlice = createSlice({
  name: "filters",

  initialState,
  reducers: {
    toggleColor: (state, action: PayloadAction<Color>) => {
      const color = action.payload;
      if (state.colors.includes(color)) {
        state.colors = state.colors.filter(c => c !== color);
      } else {
        state.colors.push(color);
      }
    }
  },
});

export const { toggleColor } = filtersSlice.actions;

export const getColorFilters = (state: RootState) => state.filters.colors;

export default filtersSlice.reducer;
