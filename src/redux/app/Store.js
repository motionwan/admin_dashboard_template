import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from '../features/Theme/Theme.slice';
import sidebarSlice from '../features/Sidebar/Sidebar.slice';

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    sidebar: sidebarSlice,
  },
});

export default store;
