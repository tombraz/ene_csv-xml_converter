import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpened: false,
};

export const confirmModalSlice = createSlice({
  name: "confirmModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpened = true;
    },
    closeModal: (state) => {
      state.isModalOpened = false;
    },
  },
});

export const { closeModal, openModal } = confirmModalSlice.actions;

export default confirmModalSlice.reducer;
