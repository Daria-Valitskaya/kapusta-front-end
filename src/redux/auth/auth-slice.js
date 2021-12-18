import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRegistered: false, // email sent
  isVerified: false, // for email re-sending
  isLoggedIn: false,
  errorMessage: null,
  isFetchingCurrent: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers:
    // this is working:
    (builder) => {
      builder.addCase(authOperations.register.fulfilled, (state, action) => {
        console.log("register success");
        state.isRegistered = true;
        state.isVerified = false;
        state.isLoggedIn = false;
        state.errorMessage = null;
        // state.isVerified = action.payload.verify;
      });

      builder.addCase(authOperations.register.rejected, (state, action) => {
        console.log("register rejeted");
        state.isRegistered = false;
        state.isVerified = action.payload.verify;
        state.isLoggedIn = false;
        state.errorMessage = action.payload.message;
      });

      builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.data.name;
        state.user.email = action.payload.data.email;
        state.token = action.payload.data.token;
        state.isRegistered = true;
        state.isVerified = true;
        state.isLoggedIn = true;
        state.errorMessage = null;
      });

      builder.addCase(authOperations.logIn.rejected, (state, action) => {
        console.log("login rejeted");
        state.isRegistered = false;
        state.isVerified = action.payload.verified; // manually generated from operations
        state.isLoggedIn = false;
        state.errorMessage = action.payload.message;
      });

      builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isRegistered = false;
        state.isVerified = false;
        state.isLoggedIn = false;
        state.errorMessage = null;
      });

      // builder.addCase(
      //   authOperations.fetchCurrentUser.pending,
      //   (state, action) => {
      //     state.isFetchingCurrent = true;
      //     state.errorMessage = null;
      //   }
      // );

      // builder.addCase(
      //   authOperations.fetchCurrentUser.fulfilled,
      //   (state, action) => {
      //     state.user.name = action.payload.data.name;
      //     state.user.email = action.payload.data.email;

      //     state.isRegistered = false;
      //     state.isVerified = false;
      //     state.isLoggedIn = false;
      //     state.errorMessage = null;
      //   }
      // );

      // builder.addCase(
      //   authOperations.fetchCurrentUser.rejected,
      //   (state, action) => {
      //     state.isRegistered = false;
      //     state.isVerified = false;
      //     state.isLoggedIn = false;
      //     state.errorMessage = null;
      //   }
      // );
    },
});

export default authSlice.reducer;
