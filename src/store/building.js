import { createSlice } from '@reduxjs/toolkit';

const currentBuildingState = {
  currentBuildingId: null,
  fetchBuilding: [],
};

const currentBuildingSlice = createSlice({
  name: 'currentBuilding',
  initialState: currentBuildingState,
  reducers: {
    getCurrentBuildingId(state, action) {
      state.currentBuildingId = action.payload;
    },
    fetchBuilding(state, action) {
      state.building.push(action.payload);
    },
  },
});

export const buildingActions = currentBuildingSlice.actions;

export default currentBuildingSlice;
