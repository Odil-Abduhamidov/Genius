import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  apiKey: string | null;
  user: { username: string; email: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  apiKey: null,
  user: null,
  loading: false,
  error: null ,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(
      state,
      action: PayloadAction<{
        apiKey: string;
        user: { username: string; email: string };
      }>
    ) {
      state.loading = false;
      state.apiKey = action.payload.apiKey;
      state.user = action.payload.user;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.apiKey = null;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
