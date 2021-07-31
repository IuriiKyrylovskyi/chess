import axios from 'axios';

import { notificationActions } from './../store/notification';
import { loadingActions } from './../store/loading';

import { baseUrl } from './baseUrl';

export const fetchBuildingsList = (dispatch, projectId, buildingsActions) => {
  return axios(`${baseUrl}/projects/buildings/?project=${projectId}`)
    .then(response => {
      dispatch(buildingsActions.fetchBuildings(response.data));
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

export const postBuilding = (dispatch, projectId, building) => {
  return axios
    .post(`${baseUrl}/projects/buildings/?project=${projectId}`, building)
    .then(response => {
      if (response.ok) {
        dispatch(
          notificationActions.showNotification({
            status: 'SUCCESS',
            title: 'Success',
            message: "Data's saved successfully",
          }),
        );
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
