
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataFromApi = createAsyncThunk(
  "items/fetchData",
  async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=50");
      return response.data;
    } catch (error) {
      throw Error("Error fetching data");
    }
  }
);

const ItemSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
    status: "idle", 
    error: null,
  },
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromApi.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDataFromApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchDataFromApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
  },
});

export const ItemReducer = ItemSlice.reducer;
export const  ItemSelector = (state) => state.ItemReducer;
