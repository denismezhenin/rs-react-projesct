import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "userCards",
  initialState: {
    userCards: [],
  },
  reducers: {
    addUserCard(state, action) {
      state.userCards.push(action.payload);
    },
  },
});

export const { addUserCard } = formSlice.actions;
export default formSlice.reducer;
