import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

// Create store
const store = configureStore({
  reducer: carSlice.reducer,
});
export default store;
