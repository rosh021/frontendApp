import { configureStore } from "@reduxjs/toolkit";
import spellReducer from "./redux/spellsSlice";

const store = configureStore({
  reducer: {
    spells: spellReducer,
  },
});

export default store;
