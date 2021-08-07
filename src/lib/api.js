import axios from 'axios';

import { notificationActions } from '../store/notification';
import { loadingActions } from '../store/loading';

import { baseUrl } from './baseUrl';

// export const fetchBuildingsList = (dispatch, projectId, buildingsActions) => {
export const fetchData = (dispatch, urlPart, dataActionsReducer) => {
  return axios(`${baseUrl}${urlPart}`)
    .then(response => {
      // dispatch(dataActions.fetchBuildings(response.data));
      dispatch(dataActionsReducer(response.data));
      dispatch(
        notificationActions.showNotification({
          status: 'SUCCESS',
          title: 'Success',
          message: "Data's loaded successfully",
        }),
      );
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      dispatch(
        notificationActions.showNotification({
          status: 'ERROR',
          title: 'Error',
          message: 'Failed to load data',
        }),
      );
    })
    .finally(() => {
      dispatch(loadingActions.loaded());
    });
};

export const postData = (dispatch, urlPart, history, data) => {
  return axios
    .post(`${baseUrl}${urlPart}`, data)
    .then(response => {
      if (response.ok) {
        dispatch(
          notificationActions.showNotification({
            status: 'SUCCESS',
            title: 'Success',
            message: "Data's saved successfully",
          }),
        );
        history.push(urlPart);
      }
    })
    .catch(error => {
      console.error('Error saving data: ', error);
      dispatch(
        notificationActions.showNotification({
          status: 'ERROR',
          title: 'Error',
          message: 'Failed to save data',
        }),
      );
    })
    .finally(() => {
      dispatch(loadingActions.loaded());
    });
};

export const deleteData = (dispatch, urlPart, id) => {
  return axios
    .delete(`${baseUrl}${urlPart}${id}`)
    .then(response => {
      if (response.ok) {
        dispatch(
          notificationActions.showNotification({
            status: 'SUCCESS',
            title: 'Success',
            message: "Data's been deleted successfully",
          }),
        );
      }
    })
    .catch(error => {
      console.error('Error on deleting data: ', error);
      dispatch(
        notificationActions.showNotification({
          status: 'ERROR',
          title: 'Error',
          message: 'Failed to delete data',
        }),
      );
    })
    .finally(() => {
      dispatch(loadingActions.loaded());
    });
};
