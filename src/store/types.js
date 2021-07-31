import { createSlice } from '@reduxjs/toolkit';

const initialTypesState = {
  types: [],
};

const typesSlice = createSlice({
  name: 'types',
  initialState: initialTypesState,
  reducers: {
    fetchTypes(state, action) {
      const fetchTypesData = action.payload;
      // console.log(fetchTypesData);
      // state.Types = [...state.Types, ...fetchTypesData];
      state.types = fetchTypesData;
    },
  },
});

export const typesActions = typesSlice.actions;

export default typesSlice;
