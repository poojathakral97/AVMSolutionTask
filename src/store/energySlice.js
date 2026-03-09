import { createSlice } from "@reduxjs/toolkit";

const energySlice = createSlice({
  name: "energy",
  initialState: {
    lights: 4300,
    water: 8.42
  },
  reducers: {
    updateLights: (state, action) => {
      state.lights = action.payload;
    },
    updateWater: (state, action) => {
      state.water = action.payload;
    }
  }
});

export const { updateLights, updateWater } = energySlice.actions;
export default energySlice.reducer;