import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light-theme',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchAppTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { switchAppTheme } = themeSlice.actions;
export default themeSlice.reducer;
