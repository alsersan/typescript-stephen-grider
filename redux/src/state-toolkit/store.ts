import { configureStore } from '@reduxjs/toolkit';
import { repositoriesReducer } from './repositoriesSlice';

export const storeToolkit = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
});

export type RootState = ReturnType<typeof storeToolkit.getState>;
export type AppDispatch = typeof storeToolkit.dispatch;
