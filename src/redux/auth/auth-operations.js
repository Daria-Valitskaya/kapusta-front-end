import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk("auth/signup", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Sorry but user with such email already exists, please try another combination');
  }
});

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("/auth/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(``);
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/auth/current");
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

// TODO: need to move all requests to APIservice file
