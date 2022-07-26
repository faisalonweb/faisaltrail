import { createSlice } from '@reduxjs/toolkit';
import { trailsData, trailCardsData, trailsListData } from 'src/data/data';

const initialState = {
  trails: trailsData,
  trailCards: trailCardsData,
  trailList: trailsListData,
  userInfo: {},
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    appData: (state, action) => {
      state.trailList = action.payload;
    },
    userSignupSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { appData, userSignupSuccess } = dataSlice.actions;
export default dataSlice.reducer;
