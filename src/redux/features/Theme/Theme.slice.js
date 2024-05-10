import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light', // Default theme
  },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
