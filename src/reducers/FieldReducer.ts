import axios from "axios";
import { FieldModel } from "../models/Field";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
);a
