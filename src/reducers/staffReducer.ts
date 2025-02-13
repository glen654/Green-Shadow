import axios from "axios";
import { StaffModel } from "../models/Staff";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: StaffModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/staff",
});

export const getAllStaff = createAsyncThunk("staff/getStaff", async () => {
  try {
    const response = await api.get("/view");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getStaffNames = createAsyncThunk(
  "staff/getStaffNames",
  async () => {
    try {
      const response = await api.get("/staff");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const saveStaff = createAsyncThunk(
  "staff/saveStaff",
  async (staff: StaffModel) => {
    try {
      const response = await api.post("/add", staff);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateStaff = createAsyncThunk(
  "staff/updateStaff",
  async (payload: { name: string; staff: StaffModel }) => {
    try {
      const response = await api.put(`/update/${payload.name}`, payload.staff);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteStaff = createAsyncThunk(
  "staff/deleteStaff",
  async (name: string) => {
    try {
      const response = await api.delete(`/delete/${name}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveStaff.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveStaff.rejected, (state, action) => {
        console.error("Failed to save staff member", action.payload);
      })
      .addCase(saveStaff.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(updateStaff.fulfilled, (state, action) => {
        const index = state.findIndex(
          (staff) => staff.name === action.payload.name
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateStaff.rejected, (state, action) => {
        console.error("Failed to update staff member", action.payload);
      })
      .addCase(updateStaff.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(deleteStaff.fulfilled, (state, action) => {
        return state.filter(
          (staff: StaffModel) => staff.name !== action.payload.name
        );
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        console.error("Failed to delete staff", action.payload);
      })
      .addCase(deleteStaff.pending, (state, action) => {
        console.error("Pending delete staff");
      });
    builder
      .addCase(getAllStaff.fulfilled, (state, action) => {
        action.payload.map((staff: StaffModel) => {
          state.push(staff);
        });
      })
      .addCase(getAllStaff.rejected, (state, action) => {
        console.error("Failed to load staff data", action.payload);
      })
      .addCase(getAllStaff.pending, (state, action) => {
        console.error("Pending load staff");
      });
    builder
      .addCase(getStaffNames.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getStaffNames.rejected, (state, action) => {
        console.error("Failed to load staff names", action.payload);
      })
      .addCase(getStaffNames.pending, (state, action) => {
        console.error("Pending");
      });
  },
});

export default staffSlice.reducer;
