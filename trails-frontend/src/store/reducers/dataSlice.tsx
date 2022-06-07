import { createSlice } from '@reduxjs/toolkit';
import { trailsData, trailCardsData, trailsListData } from 'src/data/data';

const initialState = {
  trails: trailsData,
  trailCards: trailCardsData,
  trailList: trailsListData
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    appData: (state, action) => {
      state.trails = action.payload;
    },
  },
});

export const { appData } = dataSlice.actions;
export default dataSlice.reducer;
