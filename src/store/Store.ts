import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModalSlice";
import FieldReducer from "../reducers/FieldReducer";
import StaffReducer from "../reducers/staffReducer";
import EquipmentReducer from "../reducers/EquipmentReducer";
import VehicleReducer from "../reducers/VehicleReducer";
import CropReducer from "../reducers/CropReducer";
import LogReducer from "../reducers/LogReducer";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    field: FieldReducer,
    staff: StaffReducer,
    equipment: EquipmentReducer,
    vehicle: VehicleReducer,
    crop: CropReducer,
    log: LogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
