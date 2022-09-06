import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './slices/habitsSlice';
import userReducer from './slices/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    habits: habitsReducer,
    user: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
