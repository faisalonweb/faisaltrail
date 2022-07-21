import { createSlice } from '@reduxjs/toolkit';
import { trailsData, trailCardsData, trailsListData } from 'src/data/data';

const initialState = {
  trails: trailsData,
  trailCards: trailCardsData,
  trailList: trailsListData,
  user_info: {}
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    appData: (state, action) => {
      state.trailList = action.payload;
    },
    userSignupSuccess: (state,action) =>  {
      state.user_info = action.payload;
      
    },
  },
});

export const { appData, userSignupSuccess } = dataSlice.actions;
export default dataSlice.reducer;
