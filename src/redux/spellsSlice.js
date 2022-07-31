import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spells: {},
};

const allSpellSlice = createSlice({
  name: "allSpells",
  initialState,
  reducers: {
    setSpells: (state, { payload }) => {
      state.spells = payload;
    },
  },
});

const { reducer, actions } = allSpellSlice;
export const { setSpells } = actions;

export default reducer;
