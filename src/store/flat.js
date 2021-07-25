import { createSlice } from '@reduxjs/toolkit';

const currentFlatState = {
  currentFlatId: null,
  fetchFlat: [],
};

const currentFlatSlice = createSlice({
  name: 'currentFlat',
  initialState: currentFlatState,
  reducers: {
    getCurrentFlatId(state, action) {
      state.currentFlatId = action.payload;
    },
    fetchFlat(state, action) {
      state.fetchFlat = action.payload;
    },
  },
});

export const flatActions = currentFlatSlice.actions;

export default currentFlatSlice;
