import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buildingsActions } from '../../store/buildings';
import { notificationActions } from '../../store/notification';
import { loadingActions } from '../../store/loading';
import axios from 'axios';

import { baseUrl } from '../../api/baseUrl';

import Building from '../../components/Building/Building';
import Add from '../../components/Add/Add';

import './styles.scss';

const Buildings = () => {
  const buildings = useSelector(state => state.buildingsArr.buildings);
  const projectId = useSelector(state => state.project.currentProjectId);
  const dispatch = useDispatch();

  // console.log(buildings);

  useEffect(() => {
    axios(`${baseUrl}/projects/buildings/?project=${projectId}`)
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
  }, [dispatch, projectId]);

  return (
    <div className="buildings">
      <h1 className="buildings__title">{`Project ${projectId}/ buildings`}</h1>
      <div className="buildings__content">
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
        {buildings.map(building => (
          <NavLink key={building.id} to="/building/sections">
            <Building props={building} />
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/projects/add">
          <Add text={'дом'} />
        </NavLink>
      </div>
    </div>
  );
};

export default Buildings;
