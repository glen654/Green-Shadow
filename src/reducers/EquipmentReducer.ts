import axios from "axios";
import { EquipmentModel } from "../models/Equipment";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: EquipmentModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/equipment",
});

export const getAllEquipment = createAsyncThunk(
  "equipment/getEquipment",
  async () => {
    try {
      const response = await api.get("/view");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const saveEquipment = createAsyncThunk(
  "equipment/saveEquipment",
  async (equipment: EquipmentModel) => {
    try {
      const response = await api.post("/add", equipment);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateEquipment = createAsyncThunk(
  "equipment/updateEquipment",
  async (payload: { equipName: string; equipment: EquipmentModel }) => {
    try {
      const response = await api.put(
        `/update/${payload.equipName}`,
        payload.equipment
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteEquipment = createAsyncThunk(
  "equipment/deleteEquipment",
  async (equipName: string) => {
    try {
      const response = await api.delete(`/delete/${equipName}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveEquipment.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveEquipment.rejected, (state, action) => {
        console.error("Failed to save Equipment", action.payload);
      })
      .addCase(saveEquipment.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(updateEquipment.fulfilled, (state, action) => {
        const index = state.findIndex(
          (equipment) => equipment.equipName === action.payload.equipName
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateEquipment.rejected, (state, action) => {
        console.error("Failed to update Equipment", action.payload);
      })
      .addCase(updateEquipment.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(deleteEquipment.fulfilled, (state, action) => {
        return state.filter(
          (equipment: EquipmentModel) =>
            equipment.equipName !== action.payload.equipName
        );
      })
      .addCase(deleteEquipment.rejected, (state, action) => {
        console.error("Failed to delete Equipment", action.payload);
      })
      .addCase(deleteEquipment.pending, (state, action) => {
        console.error("Pending delete Equipment");
      });
    builder
      .addCase(getAllEquipment.fulfilled, (state, action) => {
        action.payload.map((equipment: EquipmentModel) => {
          state.push(equipment);
        });
      })
      .addCase(getAllEquipment.rejected, (state, action) => {
        console.error("Failed to load Equipment data", action.payload);
      })
      .addCase(getAllEquipment.pending, (state, action) => {
        console.error("Pending load equipment");
      });
  },
});

export default equipmentSlice.reducer;
