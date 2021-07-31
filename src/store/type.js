import { createSlice } from '@reduxjs/toolkit';

const currentTypeState = {
  currentTypeId: null,
  fetchType: [],
};

const currentTypeSlice = createSlice({
  name: 'currentType',
  initialState: currentTypeState,
  reducers: {
    getCurrentTypeId(state, action) {
      state.currentTypeId = action.payload;
    },
    fetchType(state, action) {
      state.fetchType = action.payload;
    },
  },
});

export const typeActions = currentTypeSlice.actions;

export default currentTypeSlice;
