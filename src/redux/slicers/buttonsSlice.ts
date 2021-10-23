import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPickActive: true,
  isCleanActive: false,
  isPopulateActive: false,
};

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    pickActivate: (state) => {
      state.isPickActive = true;
    },
    pickDeactivate: (state) => {
      state.isPickActive = false;
    },
    cleanActivate: (state) => {
      state.isCleanActive = true;
    },
    cleanDeactivate: (state) => {
      state.isCleanActive = false;
    },
    populateActivate: (state) => {
      state.isPopulateActive = true;
    },
    populateDeactivate: (state) => {
      state.isPopulateActive = false;
    },
  },
});

export const {
  pickActivate,
  pickDeactivate,
  cleanActivate,
  cleanDeactivate,
  populateActivate,
  populateDeactivate,
} = buttonsSlice.actions;

export default buttonsSlice.reducer;
