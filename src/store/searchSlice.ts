import { createSlice } from "@reduxjs/toolkit";

type searchState = {
  searchValue: string;
};

const initialState: searchState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setStateSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setStateSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
