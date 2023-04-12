import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import { characterAPI } from "./API";

export default configureStore({
  reducer: {
    userCards: formReducer,
    [characterAPI.reducerPath]: characterAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterAPI.middleware),
});
