import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
});
