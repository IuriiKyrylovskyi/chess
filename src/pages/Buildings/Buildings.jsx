import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buildingsActions } from '../../store/buildings';

import { fetchData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import BreadCrumbs from '../../components/common/BreadCrumbs/BreadCrumbs';
import Building from '../../components/Building/Building';
import Add from '../../components/Add/Add';
import CardWrap from '../../components/common/CardWrap/CardWrap';
import CardControls from '../../components/common/CardControls/CardControls';

import './styles.scss';

const Buildings = () => {
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildings = useSelector(state => state.buildingsArr.buildings);
  const dispatch = useDispatch();
  const urlPart = leftUrlParts.buildings;
  const dataActionsReducer = buildingsActions.fetchBuildings;

  // console.log(buildings);

  const bgImageAdd = './images/projects/main_cropped.jpg';

  const getData = () => fetchData(dispatch, urlPart, dataActionsReducer, projectId);

  useEffect(() => {
    getData();
    // fetchData(dispatch, fetchUrlPart, dataActionsReducer, projectId);
  }, []);

  return (
    <Wrap>
      <BreadCrumbs projectId={projectId} />
      <Wrap>
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
        {buildings.map(building => (
          <CardWrap key={building.id} cardBgImage={building.image || '#f3e357'}>
            <Link to="/sections">
              <Building props={building} />
            </Link>
            <CardControls id={building.id} fetchData={getData} itemToDel="/buildings/" />
          </CardWrap>
        ))}
        {/* )} */}
        <Link to="/building/add">
          <CardWrap cardBgImage={{ bgImageAdd }}>
            <Add text={'дом'} />
          </CardWrap>
        </Link>
      </Wrap>
    </Wrap>
  );
};

export default Buildings;
