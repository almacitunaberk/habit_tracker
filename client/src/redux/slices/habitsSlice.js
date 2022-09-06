import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api.js';

const initialState = {
  habits: [],
  loading: false,
  error: null,
};

const fetchAllHabits = createAsyncThunk('habits/fetchAllHabits', async (user_id) => {
  const response = await fetch('http://localhost:4000/habits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: user_id }),
  });
  const data = await response.json();
  return data;
});

const habtisSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllHabits.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.habits = [];
    });
    builder.addCase(fetchAllHabits.fulfilled, (state, action) => {
      state.loading = false;
      state.habits = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllHabits.rejected, (state, action) => {
      state.loading = false;
      state.habits = [];
      state.error = action.payload;
    });
  },
});

export { fetchAllHabits };
export default habtisSlice.reducer;
