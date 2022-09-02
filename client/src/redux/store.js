import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './slices/habitsSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    habits: habitsReducer,
    user: userReducer,
  },
});

export default store;
