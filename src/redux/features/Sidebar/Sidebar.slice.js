import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen; // Update isOpen immutably
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const selectIsOpen = (state) => state.sidebar.isOpen; // Selector for isOpen

export default sidebarSlice.reducer;
