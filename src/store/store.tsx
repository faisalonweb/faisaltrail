import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'src/store/reducers/dataSlice';
import { appApi } from 'src/store/reducers/api';
import { authApi } from 'src/store/reducers/authapi';
import { privateApis } from 'src/store/reducers/privateapis';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [privateApis.reducerPath]: privateApis.reducer,
    appData: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
