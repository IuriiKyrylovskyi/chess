import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { flatsActions } from '../../store/flats';
import { notificationActions } from '../../store/notification';
import { loadingActions } from '../../store/loading';
import axios from 'axios';

import { baseUrl } from '../../lib/baseUrl';

import Flat from '../../components/Flat/Flat';
import Add from '../../components/Add/Add';

import './styles.scss';

const Flats = () => {
  const flats = useSelector(state => state.flatsArr.flats);
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingId = useSelector(state => state.building.currentBuildingId);
  const sectionId = useSelector(state => state.section.currentSectionId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();

  console.log(flats);

  const filteredFlats = flats.filter(
    flat =>
      flat.building === buildingId && flat.section === sectionId,
  );
  console.log(filteredFlats);
  useEffect(() => {
    axios(`${baseUrl}/flats/?project=${projectId}`)
      .then(response => {
        dispatch(flatsActions.fetchFlats(response.data));
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
    <div className="flats">
      <h1 className="flats__title">{`Project ${projectId}/ Building ${buildingName}/ Section ${sectionId}/ flats`}</h1>
      <div className="flats__content">
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {filteredFlats.map(flat => (
          <NavLink key={flat.id} to="/flats">
            <Flat props={flat} />
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/flats/add">
          <Add text={'квартиру'} />
        </NavLink>
      </div>
    </div>
  );
};

export default Flats;
