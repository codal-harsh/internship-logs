import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux"; // or '@reduxjs/toolkit'

import { persistStore, persistReducer } from "redux-persist";
import authReducer from "../reducers/authReducer";
import noteReducer from "../reducers/noteReducer";

const rootReducer = combineReducers({
  user: authReducer,
  notes: noteReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "notes"], // only the 'user' state will be persisted (optional)
  // blacklist: ['someOtherSlice'], // states that should not be persisted (optional)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
