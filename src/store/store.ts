import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import { reducer as favoriteReducer } from './favorites/favorites.slice';
import { UserSlice } from './user/user.slice';

const reducers = combineReducers({
  favorites: favoriteReducer,
  user: UserSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
