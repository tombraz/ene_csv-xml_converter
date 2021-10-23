import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headers: [],
};

export const headersSlice = createSlice({
  name: "headers",
  initialState,
  reducers: {
    setHeaders: (state, { payload }) => {
      state.headers = payload;
    },
  },
});

export const { setHeaders } = headersSlice.actions;

export default headersSlice.reducer;
