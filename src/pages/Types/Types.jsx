import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { typesActions } from '../../store/types';

import { fetchData } from '../../api/axios';
import { leftUrlParts } from '../../api/baseUrl';

import { arrayUniqueByKey } from '../../functions/functions';

import Wrap from '../../components/common/Wrap/Wrap';
import CardWrap from '../../components/common/CardWrap/CardWrap';
import Type from '../../components/Type/Type';
import Add from '../../components/Add/Add';

import './styles.scss';

const Types = () => {
  const types = useSelector(state => state.typesArr.types);
  const projectId = useSelector(state => state.project.currentProjectId);
  // const buildingId = useSelector(state => state.building.currentBuildingId);
  const sectionId = useSelector(state => state.section.currentSectionId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();
  const fetchUrlPart = leftUrlParts.types + projectId;
  const dataActionsReducer = typesActions.fetchTypes;

  console.log(fetchUrlPart);
  console.log(types);

  // const key = 'flat_type.title';
  // const uniqueTypes = arrayUniqueByKey(types, key);
  // console.log(uniqueTypes);

  const bgImageAdd = './images/projects/main_cropped.jpg';

  useEffect(() => {
    fetchData(dispatch, fetchUrlPart, dataActionsReducer);
  }, [dispatch, fetchUrlPart, dataActionsReducer]);

  return (
    <Wrap>
      <h1 className="Types__title">{`Project ${projectId}/ Building ${buildingName}/ Section ${sectionId}/ Types`}</h1>
      <Wrap>
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {/* {uniqueTypes.map(type => ( */}
        {types.map(type => (
          <NavLink key={type.id} to="/">
            <CardWrap>
              <Type props={type} />
            </CardWrap>
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/Type/add">
          <CardWrap cardBgImage={{ bgImageAdd }}>
            <Add text={'план'} />
          </CardWrap>
        </NavLink>
      </Wrap>
    </Wrap>
  );
};

export default Types;
