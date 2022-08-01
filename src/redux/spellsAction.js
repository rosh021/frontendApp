import { fetchAllSpells, fetchSingleSpells } from "../helper/axiosHelper.js";
import { setSingleSpell, setSpells, setShowModal } from "./spellsSlice.js";

export const spellsAction = () => async (dispatch) => {
  const { results } = await fetchAllSpells();

  dispatch(setSpells(results));
};

export const singleSpellAction = (index) => async (dispatch) => {
  const results = await fetchSingleSpells(index);

  dispatch(setSingleSpell(results));
};
