import {
  configureStore,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import searchReducer from "./searchSlice";
import { characterAPI } from "./API";

const rootReducer = combineReducers({
  userCards: formReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
  searchValue: searchReducer,
});

const store = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(characterAPI.middleware),
  });
};

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
