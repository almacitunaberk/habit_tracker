import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api.js';

const initialState = {
  habits: [],
  loading: false,
  error: null,
};

const fetchAllHabits = createAsyncThunk('habits/fetchAllHabits', async () => {
  const habits = await api.fetchAllHabits();
  return habits;
});

const habtisSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllHabits.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllHabits.fulfilled, (state, action) => {
      state.loading = false;
      state.habits = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllHabits.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchAllHabits };
export default habtisSlice.reducer;
