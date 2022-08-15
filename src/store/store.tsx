import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'src/store/reducers/dataSlice';
import { appApi } from 'src/store/reducers/api';
import { authApi } from 'src/store/reducers/authapi';
import { privateApi } from 'src/store/reducers/privateapi';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [privateApi.reducerPath]: privateApi.reducer,
    appData: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
