import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
  loading: false,
  error: null,
};

const fetchAllHabits = createAsyncThunk('habits/fetchAllHabits', async () => {
  const response = await fetch('http://localhost:4000/habits', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

const createNewHabit = createAsyncThunk('habits/createNewHabit', async (newHabit) => {
  const response = await fetch('http://localhost:4000/habits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newHabit),
    credentials: 'include',
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
    builder.addCase(createNewHabit.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createNewHabit.fulfilled, (state, action) => {
      state.loading = false;
      state.habits.push(action.payload);
      state.error = null;
    });
    builder.addCase(createNewHabit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchAllHabits, createNewHabit };
export default habtisSlice.reducer;
