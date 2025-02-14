import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModalSlice";
import FieldReducer from "../reducers/FieldReducer";
import StaffReducer from "../reducers/staffReducer";
import EquipmentReducer from "../reducers/EquipmentReducer";
import VehicleReducer from "../reducers/VehicleReducer";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    field: FieldReducer,
    staff: StaffReducer,
    equipment: EquipmentReducer,
    vehicle: VehicleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
