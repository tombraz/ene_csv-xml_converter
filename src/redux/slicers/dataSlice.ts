import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null as CommonTypes.InputType[] | null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
    setExported: (state, { payload }) => {
      const record = state.data?.find(
        (record: CommonTypes.InputType) => record.PodCode === payload
      );

      if (record) {
        record.exported = true;
        localStorage.setItem("pointsData", JSON.stringify(state.data));
      }
    },
  },
});

export const { setData, setExported } = dataSlice.actions;

export default dataSlice.reducer;
