import { createSlice } from '@reduxjs/toolkit';

const initialBuildingsState = {
  buildings: [],
};

const buildingsSlice = createSlice({
  name: 'buildings',
  initialState: initialBuildingsState,
  reducers: {
    fetchBuildings(state,action) {
      const fetchbuildingsData = action.payload;
      // console.log(fetchbuildingsData);
      // state.buildings = [...state.buildings, ...fetchbuildingsData];
      state.buildings = fetchbuildingsData;
    },
  },
});

export const buildingsActions = buildingsSlice.actions;

export default buildingsSlice;
