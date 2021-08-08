import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { typesActions } from '../../store/types';

import { fetchData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import { arrayUniqueByKey } from '../../functions/functions';

import Wrap from '../../components/common/Wrap/Wrap';
import CardWrap from '../../components/common/CardWrap/CardWrap';
import BreadCrumbs from '../../components/common/BreadCrumbs/BreadCrumbs';
import Type from '../../components/Type/Type';
import Add from '../../components/Add/Add';
import CardControls from '../../components/common/CardControls/CardControls';

import './styles.scss';

const Types = () => {
  const types = useSelector(state => state.typesArr.types);
  const projectId = useSelector(state => state.project.currentProjectId);
  // const buildingId = useSelector(state => state.building.currentBuildingId);
  const sectionId = useSelector(state => state.section.currentSectionId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();
  const urlPart = leftUrlParts.types;
  const dataActionsReducer = typesActions.fetchTypes;

  console.log(urlPart);
  console.log(types);

  // const key = 'flat_type.title';
  // const uniqueTypes = arrayUniqueByKey(types, key);
  // console.log(uniqueTypes);

  const bgImageAdd = './images/projects/main_cropped.jpg';

   const getData = () => fetchData(dispatch, urlPart, dataActionsReducer, projectId);

   useEffect(() => {
     getData();
     // fetchData(dispatch, fetchUrlPart, dataActionsReducer, projectId);
   }, []);
  
  // useEffect(() => {
  //   fetchData(dispatch, fetchUrlPart, dataActionsReducer, projectId);
  // }, [dispatch, fetchUrlPart, dataActionsReducer, projectId]);

  return (
    <Wrap>
      <BreadCrumbs projectId={projectId} buildingName={buildingName} sectionId={sectionId} />
      <Wrap>
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {/* {uniqueTypes.map(type => ( */}
        {types.map(type => (
          <CardWrap key={type.id} cardBgImage={'./images/add.png'}>
            <Link to="/">
              <Type props={type} />
            </Link>
            <CardControls id={type.id} fetchData={getData} itemToDel="/type/" />
          </CardWrap>
        ))}
        {/* )} */}
        <Link to="/type/add">
          <CardWrap cardBgImage={{ bgImageAdd }}>
            <Add text={'план'} />
          </CardWrap>
        </Link>
      </Wrap>
    </Wrap>
  );
};

export default Types;
