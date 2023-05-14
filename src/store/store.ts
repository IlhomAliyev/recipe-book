import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoriteReducer } from './favorites/favorites.slice';
import { UserSlice } from './user/user.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

// const logger = createLogger({
  // collapsed: true,
// });

const reducers = combineReducers({
  favorites: favoriteReducer,
  user: UserSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  // .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>