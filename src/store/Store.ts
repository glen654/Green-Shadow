import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModalSlice";
import FieldReducer from "../reducers/FieldReducer";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    field: FieldReducer
  },
});


export type AppDispatch = typeof store.dispatch;