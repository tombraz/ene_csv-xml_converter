import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../slicers/dataSlice";
import headersSlice from "../slicers/headersSlice";
import buttonsSlice from "../slicers/buttonsSlice";
import confirmModalSlice from "../slicers/confirmModalSlice";
import fileSlice from "../slicers/fileSlice";
import filterSlice from "../slicers/filterSlice";

export const store = configureStore({
  reducer: {
    records: dataSlice,
    headers: headersSlice,
    buttons: buttonsSlice,
    confirmModal: confirmModalSlice,
    file: fileSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
