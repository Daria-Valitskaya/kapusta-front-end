const getUserName = (state) => state.auth.user.name;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrent;
const getIsRegistered = (state) => state.auth.isRegistered;
const getIsVerified = (state) => state.auth.isVerified;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getErrorMessage = (state) => state.auth.errorMessage;

const authSelectors = {
  getUserName,
  getIsFetchingCurrent,
  getIsRegistered,
  getIsVerified,
  getIsLoggedIn,
  getErrorMessage,
};

export default authSelectors;
