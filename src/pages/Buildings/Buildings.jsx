import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buildingsActions } from '../../store/buildings';

import { fetchData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Building from '../../components/Building/Building';
import Add from '../../components/Add/Add';

import './styles.scss';
import CardWrap from '../../components/common/CardWrap/CardWrap';

const Buildings = () => {
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildings = useSelector(state => state.buildingsArr.buildings);
  const dispatch = useDispatch();
  const fetchUrlPart = leftUrlParts.buildings + projectId;
  const dataActionsReducer = buildingsActions.fetchBuildings;

  // console.log(buildings);

  const bgImageAdd = './images/projects/main_cropped.jpg';

  useEffect(() => {
    fetchData(dispatch, fetchUrlPart, dataActionsReducer);
  }, [dispatch, fetchUrlPart, dataActionsReducer]);

  return (
    <Wrap>
      <h1 className="buildings__title">{`Project ${projectId}/ buildings`}</h1>
      <Wrap>
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
        {buildings.map(building => (
          <NavLink key={building.id} to="/sections">
            <CardWrap cardBgImage={building.image || '#f3e357'}>
              <Building props={building} />
            </CardWrap>
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/building/add">
          <CardWrap cardBgImage={{ bgImageAdd }}>
            <Add text={'дом'} />
          </CardWrap>
        </NavLink>
      </Wrap>
    </Wrap>
  );
};

export default Buildings;
