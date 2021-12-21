import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setCurrentLocation, setScreenWidth } from "./screenWidth.action";

const screenWidthReducer = createReducer(0, {
  [setScreenWidth]: (state, { payload }) => payload,
});

const currLocationReducer = createReducer("", {
  [setCurrentLocation]: (state, { payload }) => payload,
});

export default combineReducers({
  width: screenWidthReducer,
  location: currLocationReducer,
});