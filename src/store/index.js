import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth';
import projectsSlice from './projects';
import currentProjectSlice from './project';
import buildingsSlice from './buildings';
import currentBuildingSlice from './building';
import sectionsSlice from './sections';
import currentSectionSlice from './section';
import notificationSlice from './notification';
import loadingSlice from './loading';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    projectsArr: projectsSlice.reducer,
    project: currentProjectSlice.reducer,
    buildingsArr: buildingsSlice.reducer,
    building: currentBuildingSlice.reducer,
    sectionsArr: sectionsSlice.reducer,
    section: currentSectionSlice.reducer,
    notification: notificationSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
