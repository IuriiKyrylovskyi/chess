import { createSlice } from '@reduxjs/toolkit';

const currentPlanState = {
  currentPlanId: null,
  fetchPlan: [],
};

const currentPlanSlice = createSlice({
  name: 'currentPlan',
  initialState: currentPlanState,
  reducers: {
    getCurrentPlanId(state, action) {
      state.currentPlanId = action.payload;
    },
    fetchPlan(state, action) {
      state.fetchPlan = action.payload;
    },
  },
});

export const planActions = currentPlanSlice.actions;

export default currentPlanSlice;
