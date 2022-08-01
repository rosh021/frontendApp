import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spells: [],
  selectedSpell: {},
  showModal: false,
  favourite: [],
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
    setFavourite: (state, { payload }) => {
      const newSet = [...state.favourite, payload];

      localStorage.setItem("favourites", JSON.stringify(newSet));
      state.favourite = newSet;
    },
  },
});

const { reducer, actions } = allSpellSlice;
export const { setSpells, setSingleSpell, setShowModal, setFavourite } =
  actions;

export default reducer;
