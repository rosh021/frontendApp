import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spells: [],
  selectedSpell: {},
  showModal: false,
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
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

const { reducer, actions } = allSpellSlice;
export const { setSpells, setSingleSpell, setShowModal } = actions;

export default reducer;
