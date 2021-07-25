import { createSlice } from '@reduxjs/toolkit';

const currentProjectState = {
  currentProjectId: null,
  fetchProject: [],
};

const currentProjectSlice = createSlice({
  name: 'currentProject',
  initialState: currentProjectState,
  reducers: {
    getCurrentProjectId(state, action) {
      state.currentProjectId = action.id;
    },
    fetchProject(state, action) {
      state.project.push(action.payload);
    },
  },
});

export const projectActions = currentProjectSlice.actions;

export default currentProjectSlice;
