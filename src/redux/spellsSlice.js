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
      const objExist = state.favourite.filter(
        (item) => item._id === payload._id
      );
      if (objExist.length) {
        return;
      }
      const newSet = [...state.favourite, payload];

      localStorage.setItem("favourites", JSON.stringify(newSet));
      state.favourite = newSet;
    },

    removeFavourite: (state, { payload }) => {
      const filteredItem = state.favourite.filter(
        (item) => item._id !== payload
      );

      localStorage.setItem("favourites", JSON.stringify(filteredItem));
      state.favourite = filteredItem;
    },
  },
});

const { reducer, actions } = allSpellSlice;
export const {
  setSpells,
  setSingleSpell,
  setShowModal,
  setFavourite,
  removeFavourite,
} = actions;

export default reducer;
