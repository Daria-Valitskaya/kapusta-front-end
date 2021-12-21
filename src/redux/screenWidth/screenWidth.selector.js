export const getIsMobileMedia = (state) => state.screenWidth.width < 768;
export const getCurrLocation = (state) => state.screenWidth.location.pathname;