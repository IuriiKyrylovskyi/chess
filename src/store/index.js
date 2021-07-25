import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth';
import projectsSlice from './projects';
import currentProjectSlice from './project';
import notificationSlice from './notification';
import loadingSlice from './loading';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    projectsArr: projectsSlice.reducer,
    project: currentProjectSlice.reducer,
    notification: notificationSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
