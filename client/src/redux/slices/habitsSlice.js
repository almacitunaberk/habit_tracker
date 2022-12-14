import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
  loading: false,
  error: null,
};

const serverURL =
  process.env.REACT_APP_NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://tahabitstracker.herokuapp.com';

const fetchAllHabits = createAsyncThunk('habits/fetchAllHabits', async () => {
  const response = await fetch(`${serverURL}/habits`, {
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
  const response = await fetch(`${serverURL}/habits`, {
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

const deleteHabit = createAsyncThunk('habits/deleteHabit', async (habitId) => {
  const response = await fetch(`${serverURL}/habits/${habitId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

const editHabit = createAsyncThunk('habits/editHabit', async (editedHabit) => {
  const id = editedHabit.id;
  const response = await fetch(`${serverURL}/habits/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedHabit),
    credentials: 'include',
  });
  const data = await response.json();
  return data;
});

const completedToday = createAsyncThunk('habits/completedToday', async (id) => {
  const response = await fetch(`${serverURL}/habits/${id}/completed`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
      state.habits = [...state.habits, action.payload];
      state.error = null;
    });
    builder.addCase(createNewHabit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteHabit.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteHabit.fulfilled, (state, action) => {
      state.loading = false;
      state.habits = state.habits.filter((habit) => habit.id !== action.payload.id);
      state.error = null;
    });
    builder.addCase(deleteHabit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editHabit.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editHabit.fulfilled, (state, action) => {
      state.loading = false;
      state.habits = state.habits.map((habit) => {
        if (habit.id !== action.payload.id) {
          return habit;
        }
        return action.payload;
      });
      state.error = null;
    });
    builder.addCase(editHabit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(completedToday.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(completedToday.fulfilled, (state, action) => {
      state.loading = false;
      state.habits = state.habits.map((habit) => {
        if (habit.id !== action.payload.id) {
          return habit;
        }
        return action.payload;
      });
      state.error = null;
    });
    builder.addCase(completedToday.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { fetchAllHabits, createNewHabit, deleteHabit, editHabit, completedToday };
export default habtisSlice.reducer;
