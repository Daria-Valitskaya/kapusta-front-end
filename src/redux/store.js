import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
// это остатки из нашей работы по телефонной книге
// надо правильные переменные сюда вставить и оно по идее должно работать, если все херня - УДАЛЯЙТЕ
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// это остатки из нашей работы по телефонной книге
// надо правильные переменные сюда вставить и оно по идее должно работать, если все херня - УДАЛЯЙТЕ
const persistedReducer = combineReducers({
  //   auth: persistReducer(authPersistConfig, authReducer),
  //   contacts: contactReducers,
});

const bothPersistReducer = persistReducer(persistConfig, persistedReducer);
const store = configureStore({
  reducer: bothPersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);
export { store, persistor };
