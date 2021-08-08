import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sectionsActions } from '../../store/sections';

import { fetchData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Section from '../../components/Section/Section';
import Add from '../../components/Add/Add';
import CardWrap from '../../components/common/CardWrap/CardWrap';
import Wrap from '../../components/common/Wrap/Wrap';
import CardControls from '../../components/common/CardControls/CardControls';
import BreadCrumbs from '../../components/common/BreadCrumbs/BreadCrumbs';

import './styles.scss';

const Sections = () => {
  const sections = useSelector(state => state.sectionsArr.sections);
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingId = useSelector(state => state.building.currentBuildingId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();
  const urlPart = leftUrlParts.sections;
  const dataActionsReducer = sectionsActions.fetchSections;

  console.log(sections);

  const bgImageAdd = './images/projects/main_cropped.jpg';

  const filteredSections = sections.filter(section => section.building === buildingId);
  console.log(filteredSections);

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
      <BreadCrumbs projectId={projectId} buildingName={buildingName} />
      <Wrap>
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {filteredSections.map(section => (
          <CardWrap key={section.id}>
            <Link to="/types">
              <Section props={section} />
            </Link>
            <CardControls id={section.id} fetchData={getData} itemToDel="/sections/" />
          </CardWrap>
        ))}
        {/* )} */}
        <Link to="/section/add">
          <CardWrap cardBgImage={{ bgImageAdd }}>
            <Add text={'секцию'} />
          </CardWrap>
        </Link>
      </Wrap>
    </Wrap>
  );
};

export default Sections;
