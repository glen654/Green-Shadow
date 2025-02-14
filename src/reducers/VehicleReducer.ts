import { VehicleModel } from "../models/Vehicle";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: VehicleModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/vehicle",
});

export const getAllVehicles = createAsyncThunk(
  "vehicle/getVehicle",
  async () => {
    try {
      const response = await api.get("/view");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const saveVehicle = createAsyncThunk(
  "vehicle/saveVehicle",
  async (vehicle: VehicleModel) => {
    try {
      const response = await api.post("/add", vehicle);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateVehicle = createAsyncThunk(
  "vehicle/updateVehicle",
  async (payload: { licenseNumber: string; vehicle: VehicleModel }) => {
    try {
      const response = await api.put(
        `/update/${payload.licenseNumber}`,
        payload.vehicle
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteVehicle = createAsyncThunk(
  "vehicle/deleteVehicle",
  async (licenseNumber: string) => {
    try {
      const response = await api.delete(`/delete/${licenseNumber}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveVehicle.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveVehicle.rejected, (state, action) => {
        console.error("Failed to save Vehicle", action.payload);
      })
      .addCase(saveVehicle.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(updateVehicle.fulfilled, (state, action) => {
        const index = state.findIndex(
          (vehicle) =>
            vehicle.licensePlateNumber === action.payload.licensePlateNumber
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateVehicle.rejected, (state, action) => {
        console.error("Failed to update Vehicle", action.payload);
      })
      .addCase(updateVehicle.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(deleteVehicle.fulfilled, (state, action) => {
        return state.filter(
          (vehicle: VehicleModel) =>
            vehicle.licensePlateNumber !== action.payload.licensePlateNumber
        );
      })
      .addCase(deleteVehicle.rejected, (state, action) => {
        console.error("Failed to delete Vehicle", action.payload);
      })
      .addCase(deleteVehicle.pending, (state, action) => {
        console.error("Pending delete Vehicle");
      });
    builder
      .addCase(getAllVehicles.fulfilled, (state, action) => {
        action.payload.map((vehicle: VehicleModel) => {
          state.push(vehicle);
        });
      })
      .addCase(getAllVehicles.rejected, (state, action) => {
        console.error("Failed to load Vehicle data", action.payload);
      })
      .addCase(getAllVehicles.pending, (state, action) => {
        console.error("Pending load Vehicle");
      });
  },
});

export default vehicleSlice.reducer;
