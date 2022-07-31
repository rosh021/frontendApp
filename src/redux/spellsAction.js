import { fetchAllSpells } from "../helper/axiosHelper.js";
import { setSpells } from "./spellsSlice.js";

export const spellsAction = () => async (dispatch) => {
  const resultPromise = fetchAllSpells();
  dispatch(setSpells(resultPromise));
};
