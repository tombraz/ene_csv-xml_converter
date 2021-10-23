import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exportedChecked: true,
  notExportedChecked: true,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    toggleExported: (state) => {
      state.exportedChecked = !state.exportedChecked;
    },
    toggleNotExported: (state) => {
      state.notExportedChecked = !state.notExportedChecked;
    },
  },
});

export const { toggleExported, toggleNotExported } = filterSlice.actions;

export default filterSlice.reducer;
