import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spells: [],
  selectedSpell: {},
};

const allSpellSlice = createSlice({
  name: "allSpells",
  initialState,
  reducers: {
    setSpells: (state, { payload }) => {
      state.spells = payload;
    },
    setSingleSpell: (state, { payload }) => {
      state.selectedSpell = payload;
    },
  },
});

const { reducer, actions } = allSpellSlice;
export const { setSpells, setSingleSpell } = actions;

export default reducer;
