import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFileRead: false,
};

export const fileSlice = createSlice({
  name: "fileSlice",
  initialState,
  reducers: {
    setIsFileRead: (state, { payload }) => {
      state.isFileRead = payload;
    },
  },
});

export const { setIsFileRead } = fileSlice.actions;

export default fileSlice.reducer;
