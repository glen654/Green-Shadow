import axios from "axios";
import { FieldModel } from "../models/Field";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: FieldModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/field",
});

export const getAllFields = createAsyncThunk("field/getFields", async () => {
  try {
    const response = await api.get("/view");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const saveField = createAsyncThunk(
  "field/saveField",
  async (field: FieldModel) => {
    try {
      const response = await api.post("/add", field);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const updateField = createAsyncThunk(
  "field/updateField",
  async (payload: { fieldName: string; field: FieldModel }) => {
    try {
      const response = await api.put(
        `/update/${payload.fieldName}`,
        payload.field
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteField = createAsyncThunk(
  "field/deleteField",
  async (fieldName: string) => {
    try {
      const response = await api.delete(`/delete/${fieldName}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const fieldSlice = createSlice({
  name: "Field",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveField.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveField.rejected, (state, action) => {
        console.error("Failed to save field", action.payload);
      })
      .addCase(saveField.pending, (state, acction) => {
        console.error("Pending");
      });
    builder
      .addCase(updateField.fulfilled, (state, action) => {
        const index = state.findIndex(
          (field) => field.fieldName === action.payload.fieldName
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateField.rejected, (state, action) => {
        console.error("Failed to update field", action.payload);
      })
      .addCase(updateField.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(deleteField.fulfilled, (state, action) => {
        return state.filter(
          (field: FieldModel) => field.fieldName !== action.payload.fieldName
        );
      })
      .addCase(deleteField.rejected, (state, action) => {
        console.error("Failed to delete field", action.payload);
      })
      .addCase(deleteField.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(getAllFields.fulfilled, (state, action) => {
        action.payload.map((field: FieldModel) => {
          state.push(field);
        });
      })
      .addCase(getAllFields.rejected, (state, action) => {
        console.error("Failed to load Field data", action.payload);
      })
      .addCase(getAllFields.pending, (state, action) => {
        console.error("Pending");
      });
  },
});

export default fieldSlice.reducer;
