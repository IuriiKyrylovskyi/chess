import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { plansActions } from '../../store/plans';
import { notificationActions } from '../../store/notification';
import { loadingActions } from '../../store/loading';
import axios from 'axios';

import { baseUrl } from '../../api/baseUrl';
import { arrayUniqueByKey } from '../../functions/functions';

import Plan from '../../components/Plan/Plan';
import Add from '../../components/Add/Add';

import './styles.scss';

const Plans = () => {
  const plans = useSelector(state => state.plansArr.plans);
  const projectId = useSelector(state => state.project.currentProjectId);
  // const buildingId = useSelector(state => state.building.currentBuildingId);
  const sectionId = useSelector(state => state.section.currentSectionId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();

  console.log(plans);
 
  const key = 'flat_type.title';
  const uniquePlans = arrayUniqueByKey(plans, key);
  console.log(uniquePlans);

  useEffect(() => {
    axios(`${baseUrl}/flats/?project=${projectId}`)
      .then(response => {
        dispatch(plansActions.fetchPlans(response.data));
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
    <div className="plans">
      <h1 className="plans__title">{`Project ${projectId}/ Building ${buildingName}/ Section ${sectionId}/ Plans`}</h1>
      <div className="plans__content">
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {uniquePlans.map(plan => (
          <NavLink key={plan.id} to="/plan/edit">
            <Plan props={plan} />
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/plans/add">
          <Add text={'план'} />
        </NavLink>
      </div>
    </div>
  );
};

export default Plans;
