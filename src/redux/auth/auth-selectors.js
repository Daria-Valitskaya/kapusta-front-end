const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;
const getErrorMessage = state => state.auth.errorMessage;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
  getErrorMessage
};

export default authSelectors;
