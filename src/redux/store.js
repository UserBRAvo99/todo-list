import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./todoSlice";
import { settingSliceReducer } from "./settings";

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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "todo",
  version: 1,
  storage,
};
const persistConfigSetting = {
  key: "setting",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoListReducer);

const persistedReducerSetting = persistReducer(
  persistConfigSetting,
  settingSliceReducer
);

export const store = configureStore({
  reducer: {
    todoListSlice: persistedReducer,
    settingSlice: persistedReducerSetting,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
