import { configureStore } from '@reduxjs/toolkit';
import dataReducer from 'src/store/reducers/dataSlice';
import themeReducer from 'src/store/reducers/themeSlice'

export const store = configureStore({
  reducer: {
    appData: dataReducer,
    myTheme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
