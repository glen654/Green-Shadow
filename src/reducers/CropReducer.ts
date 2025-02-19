import { CropModel } from "../models/Crop";
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: CropModel[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/crop",
});

export const getAllCrops = createAsyncThunk("crop/getcrops", async () => {
  try {
    const response = await api.get("/view");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCropNames = createAsyncThunk("crop/getCropNames", async () => {
  try {
    const response = await api.get("/crops");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const saveCrop = createAsyncThunk(
  "crop/saveCrop",
  async (crop: CropModel) => {
    try {
      const formData = new FormData();

      formData.append("commonName", crop.commonName);
      formData.append("scientificName", crop.scientificName);
      formData.append("category", crop.category);
      formData.append("fieldName", crop.fieldName);
      if (crop.cropImage) {
        formData.append("cropImage", crop.cropImage);
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

export const updateCrop = createAsyncThunk(
  "crop/updateCrop",
  async (payload: { commonName: string; crop: CropModel }) => {
    try {
      const formData = new FormData();

      formData.append("commonName", payload.crop.commonName);
      formData.append("scientificName", payload.crop.scientificName);
      formData.append("category", payload.crop.category);
      formData.append("fieldName", payload.crop.fieldName);
      if (payload.crop.cropImage) {
        formData.append("cropImage", payload.crop.cropImage);
      }

      const response = await api.put(`/update/${payload.commonName}`, formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCrop = createAsyncThunk(
  "crop/deleteCrop",
  async (commonName: string) => {
    try {
      const response = await api.delete(`/delete/${commonName}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const cropSlice = createSlice({
  name: "Crop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveCrop.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(saveCrop.rejected, (state, action) => {
        console.error("Failed to save crop", action.payload);
      })
      .addCase(saveCrop.pending, (state, acction) => {
        console.error("Pending");
      });
    builder
      .addCase(updateCrop.fulfilled, (state, action) => {
        const index = state.findIndex(
          (crop) => crop.commonName === action.payload.commonName
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateCrop.rejected, (state, action) => {
        console.error("Failed to update crop", action.payload);
      })
      .addCase(updateCrop.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(deleteCrop.fulfilled, (state, action) => {
        return state.filter(
          (crop: CropModel) => crop.commonName !== action.payload.commonName
        );
      })
      .addCase(deleteCrop.rejected, (state, action) => {
        console.error("Failed to delete crop", action.payload);
      })
      .addCase(deleteCrop.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(getAllCrops.fulfilled, (state, action) => {
        action.payload.map((crop: CropModel) => {
          state.push(crop);
        });
      })
      .addCase(getAllCrops.rejected, (state, action) => {
        console.error("Failed to load crop data", action.payload);
      })
      .addCase(getAllCrops.pending, (state, action) => {
        console.error("Pending");
      });
    builder
      .addCase(getCropNames.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getCropNames.rejected, (state, action) => {
        console.error("Failed to load crop names", action.payload);
      })
      .addCase(getCropNames.pending, (state, action) => {
        console.error("Pending");
      });
  },
});

export default cropSlice.reducer;
