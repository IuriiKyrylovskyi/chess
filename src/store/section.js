import { createSlice } from '@reduxjs/toolkit';

const currentSectionState = {
  currentSectionId: null,
  fetchSection: [],
};

const currentSectionSlice = createSlice({
  name: 'currentSection',
  initialState: currentSectionState,
  reducers: {
    getCurrentSectionId(state, action) {
      state.currentSectionId = action.payload;
    },
    fetchSection(state, action) {
      state.section.push(action.payload);
    },
  },
});

export const sectionActions = currentSectionSlice.actions;

export default currentSectionSlice;
