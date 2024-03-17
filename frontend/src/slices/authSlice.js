import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerData: null,
  user: localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setRegisterData(state, action) {
      state.registerData = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setToken, setUser, setLoading, setRegisterData } = authSlice.actions;
export default authSlice.reducer;