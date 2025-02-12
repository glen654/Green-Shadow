import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModalSlice";
import FieldReducer from "../reducers/FieldReducer";
import StaffReducer from "../reducers/staffReducer"

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    field: FieldReducer,
    staff: StaffReducer
  },
});


export type AppDispatch = typeof store.dispatch;