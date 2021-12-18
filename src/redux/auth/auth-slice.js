import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isVerificationEmailSent: false,
  errorMessage: null,
  isVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers:
    // this is working:
    (builder) => {
      builder.addCase(authOperations.register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.errorMessage = null;
        state.isVerificationEmailSent = true;
        state.isVerified = action.payload.verify
      });

      builder.addCase(authOperations.register.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.isVerificationEmailSent = false;
      });

      builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.data.name;
        state.user.email = action.payload.data.email;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
        state.isVerificationEmailSent = false;
        state.errorMessage = null;
      });

      builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.errorMessage = null;
      });

      builder.addCase(
        authOperations.fetchCurrentUser.pending,
        (state, action) => {
          state.isFetchingCurrent = true;
          state.errorMessage = null;
        }
      );

      builder.addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, action) => {
          state.user.name = action.payload.data.name;
          state.user.email = action.payload.data.email;

          state.isLoggedIn = true;
          state.isFetchingCurrent = false;
          state.errorMessage = null;
        }
      );

      builder.addCase(
        authOperations.fetchCurrentUser.rejected,
        (state, action) => {
          state.isFetchingCurrent = false;
          state.errorMessage = action.payload.data.message;
        }
      );
    },
});

export default authSlice.reducer;
