import { createSlice } from '@reduxjs/toolkit';

const initialLoadingState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
  reducers: {
    loaded(state) {
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = true;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;
