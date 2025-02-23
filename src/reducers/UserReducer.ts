import { User } from "../models/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";

const initialState = {
  access_token: null,
  username: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (user: User) => {
    try {
      const response = await api.post("/auth/register", user, {
        withCredentials: true,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const loginUser = createAsyncThunk("user/login", async (user: User) => {
  try {
    const response = await api.post("/auth/login", user, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser(state) {
      state.isAuthenticated = false;
      state.access_token = null;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isAuthenticated = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("User registerd successfully");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isAuthenticated = false;
      });
    builder
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.access_token = action.payload.access_token;
        state.isAuthenticated = true;
        localStorage.setItem("access_token", action.payload.access_token);
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isAuthenticated = false;
      });
  },
});

export const { logOutUser } = userSlice.actions;
export default userSlice.reducer;
