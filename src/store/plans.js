import { createSlice } from '@reduxjs/toolkit';

const initialPlansState = {
  plans: [],
};

const PlansSlice = createSlice({
  name: 'plans',
  initialState: initialPlansState,
  reducers: {
    fetchPlans(state, action) {
      const fetchPlansData = action.payload;
      // console.log(fetchPlansData);
      // state.Plans = [...state.Plans, ...fetchPlansData];
      state.plans = fetchPlansData;
    },
  },
});

export const plansActions = PlansSlice.actions;

export default PlansSlice;
