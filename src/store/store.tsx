import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'src/store/reducers/dataSlice';
import { appApi } from 'src/store/reducers/api';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    appData: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
