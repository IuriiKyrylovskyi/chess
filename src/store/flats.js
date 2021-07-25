import { createSlice } from '@reduxjs/toolkit';

const initialFlatsState = {
  flats: [],
};

const FlatsSlice = createSlice({
  name: 'flats',
  initialState: initialFlatsState,
  reducers: {
    fetchFlats(state, action) {
      const fetchFlatsData = action.payload;
      // console.log(fetchFlatsData);
      // state.Flats = [...state.Flats, ...fetchFlatsData];
      state.flats = fetchFlatsData;
    },
  },
});

export const flatsActions = FlatsSlice.actions;

export default FlatsSlice;
