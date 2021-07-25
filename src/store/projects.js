import { createSlice } from '@reduxjs/toolkit';

const initialProjectsState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialProjectsState,
  reducers: {
    fetchProjects(state,action) {
      const fetchProjectsData = action.payload;
      // console.log(fetchProjectsData);
      // state.projects = [...state.projects, ...fetchProjectsData];
      state.projects = fetchProjectsData;
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice;
