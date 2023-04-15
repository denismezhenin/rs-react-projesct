import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormCard } from "../constants/constants";

type userCardsState = {
  userCards: IFormCard[];
};

const initialState: userCardsState = {
  userCards: [],
};

const formSlice = createSlice({
  name: "userCards",
  initialState,
  reducers: {
    addUserCard(state, action: PayloadAction<IFormCard>) {
      state.userCards.push(action.payload);
    },
  },
});

export const { addUserCard } = formSlice.actions;
export default formSlice.reducer;
