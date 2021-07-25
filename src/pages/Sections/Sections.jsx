import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sectionsActions } from '../../store/sections';
import { notificationActions } from '../../store/notification';
import { loadingActions } from '../../store/loading';
import axios from 'axios';

import { baseUrl } from '../../api/baseUrl';

// import { fetchSectionsData } from '../../../store/Sections-actions';

import Section from '../../components/Section/Section';
import Add from '../../components/Add/Add';

import './styles.scss';

const Sections = () => {
  const sections = useSelector(state => state.sectionsArr.sections);
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingId = useSelector(state => state.Building.currentBuildingId);
  const dispatch = useDispatch();

  console.log(sections);

  useEffect(() => {
    axios(`${baseUrl}/sections/?project=${projectId}`)
      .then(response => {
        dispatch(sectionsActions.fetchSections(response.data));
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
    <div className="sections">
      <h1 className="sections__title">{`Project ${projectId} building ${buildingId} sections`}</h1>
      <div className="sections__content">
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
        {Sections.map(section => (
          <NavLink key={section.id} to="/projects/buildings/sections">
            <Section props={section} />
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/sections/add">
          <Add text={'секцию'} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sections;
