import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sectionsActions } from '../../store/sections';
import { notificationActions } from '../../store/notification';
import { loadingActions } from '../../store/loading';
import axios from 'axios';

import { baseUrl } from '../../api/baseUrl';

import Section from '../../components/Section/Section';
import Add from '../../components/Add/Add';

import './styles.scss';

const Sections = () => {
  const sections = useSelector(state => state.sectionsArr.sections);
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingId = useSelector(state => state.building.currentBuildingId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();

  console.log(sections);

  const filteredSections = sections.filter(section => section.building === buildingId);
  console.log(filteredSections);
  useEffect(() => {
    axios(`${baseUrl}/projects/sections/?project=${projectId}`)
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
      <h1 className="sections__title">{`Project ${projectId}/ Building ${buildingName}/ sections`}</h1>
      <div className="sections__content">
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {filteredSections.map(section => (
          <NavLink key={section.id} to="/plans">
            <Section props={section} />
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/section/add">
          <Add text={'секцию'} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sections;
