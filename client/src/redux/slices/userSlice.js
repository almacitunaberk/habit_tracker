import { createSlice, createAsyncThunk, TaskAbortError } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: false,
  sessionExpires: null,
};

const loginUser = createAsyncThunk('user/login', async ({ body, successCallback, failureCallback }) => {
  const response = await fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const data = await response.json();
    return { data, callback: successCallback };
  } else {
    return { data: null, callback: failureCallback };
  }
});

const registerUser = createAsyncThunk('user/register', async ({ body, successCallback, failureCallback }) => {
  const response = await fetch('http://localhost:4000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const data = await response.json();
    return { data, callback: successCallback };
  } else {
    return { data: null, callback: failureCallback };
  }
});

const logoutUser = createAsyncThunk('user/logout', async (successCallback, failureCallback) => {
  const response = await fetch('http://localhost:4000/logout', {
    method: 'POST',
  });
  if (response.ok) {
    return successCallback;
  } else {
    return failureCallback;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.user = null;
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { data, callback } = action.payload;
      if (data !== null) {
        state.user = data.user;
        state.sessionExpires = data._expires;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      } else {
        state.user = null;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = false;
      }
      callback();
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
      state.sessionExpires = null;
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.user = null;
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
      state.sessionExpires = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { data, callback } = action.payload;
      if (data !== null) {
        state.user = data.user;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.sessionExpires = data._expires;
      } else {
        state.user = null;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = false;
        state.sessionExpires = null;
      }
      callback();
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
    builder.addCase(logoutUser.pending, (state, action) => {});
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      const callback = action.payload;
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.sessionExpires = null;
      callback();
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
  },
});

export { loginUser, registerUser, logoutUser };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
