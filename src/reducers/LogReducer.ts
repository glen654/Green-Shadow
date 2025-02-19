import { LogModel } from "../models/Log";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: LogModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/log",
});

export const getAllLogs = createAsyncThunk("log/getLogs", async () => {
  try {
    const response = await api.get("/view");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const saveLog = createAsyncThunk(
  "log/saveLog",
  async (log: LogModel) => {
    try {
      const formData = new FormData();

      formData.append("logName", log.logName);
      formData.append("logDate", log.logDate.toISOString());
      formData.append("fieldName", log.fieldName);
      formData.append("cropName", log.cropName);
      formData.append("staffMember", log.staffMember);
      if (log.logImage) {
        formData.append("logImage", log.logImage);
      }

      const response = await api.post("/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const updateLog = createAsyncThunk(
  "log/updateLog",
  async (payload: { logName: string; log: LogModel }) => {
    try {
      const formData = new FormData();

      formData.append("logName", payload.log.logName);
      formData.append("logDate", payload.log.logDate.toISOString());
      formData.append("fieldName", payload.log.fieldName);
      formData.append("cropName", payload.log.cropName);
      formData.append("staffMember", payload.log.staffMember);
      if (payload.log.logImage) {
        formData.append("logImage", payload.log.logImage);
      }

      const response = await api.put(`/update/${payload.logName}`, formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteLog = createAsyncThunk(
  "log/deleteLog",
  async (logName: string) => {
    try {
      const response = await api.delete(`/delete/${logName}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const logSlice = createSlice({
  name: "Log",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveLog.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveLog.rejected, (state, action) => {
        console.error("Failed to save Log", action.payload);
      })
      .addCase(saveLog.pending, (state, acction) => {
        console.error("Pending");
      });
    builder
      .addCase(updateLog.fulfilled, (state, action) => {
        const index = state.findIndex(
          (log) => log.logName === action.payload.logName
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateLog.rejected, (state, action) => {
        console.error("Failed to update log", action.payload);
      })
      .addCase(updateLog.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(deleteLog.fulfilled, (state, action) => {
        return state.filter(
          (log: LogModel) => log.logName !== action.payload.logName
        );
      })
      .addCase(deleteLog.rejected, (state, action) => {
        console.error("Failed to delete log", action.payload);
      })
      .addCase(deleteLog.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(getAllLogs.fulfilled, (state, action) => {
        action.payload.map((log: LogModel) => {
          state.push(log);
        });
      })
      .addCase(getAllLogs.rejected, (state, action) => {
        console.error("Failed to load Log data", action.payload);
      })
      .addCase(getAllLogs.pending, (state, action) => {
        console.error("Pending");
      });
  },
});

export default logSlice.reducer;
