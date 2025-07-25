import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existing = state.items.find(p => p.id === action.payload.id);
      if (existing) {
        state.items = state.items.filter(p => p.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
