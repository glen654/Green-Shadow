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

export const getFieldNames = createAsyncThunk(
  "field/getFieldNames",
  async () => {
    try {
      const response = await api.get("/fields");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const saveField = createAsyncThunk(
  "field/saveField",
  async (field: FieldModel) => {
    try {
      const formData = new FormData();

      formData.append("fieldName", field.fieldName);
      formData.append("location", field.location);
      formData.append("extentSize", String(field.extentSize));
      if (field.fieldImage) {
        formData.append("fieldImage", field.fieldImage);
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

export const updateField = createAsyncThunk(
  "field/updateField",
  async (payload: { fieldName: string; field: FieldModel }) => {
    try {
      const formData = new FormData();

      formData.append("fieldName", payload.field.fieldName);
      formData.append("location", payload.field.location);
      formData.append("extentSize", String(payload.field.extentSize));
      if (payload.field.fieldImage instanceof File) {
        formData.append("fieldImage", payload.field.fieldImage);
      }

      const response = await api.put(
        `/update/${payload.fieldName}`,
        formData
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
    builder
      .addCase(getFieldNames.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getFieldNames.rejected, (state, action) => {
        console.error("Failed to load field names", action.payload);
      })
      .addCase(getFieldNames.pending, (state, action) => {
        console.error("Pending");
      });
  },
});

export default fieldSlice.reducer;
