import { createSlice } from '@reduxjs/toolkit';

const initialNotificationState = {
  notification: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotificationState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
