import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sectionsActions } from '../../store/sections';

import { fetchData } from '../../api/axios';
import { leftUrlParts } from '../../api/baseUrl';

import Section from '../../components/Section/Section';
import Add from '../../components/Add/Add';

import './styles.scss';
import CardWrap from '../../components/common/CardWrap/CardWrap';
import Wrap from '../../components/common/Wrap/Wrap';

const Sections = () => {
  const sections = useSelector(state => state.sectionsArr.sections);
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingId = useSelector(state => state.building.currentBuildingId);
  const buildingName = useSelector(state => state.building.currentBuildingId);
  const dispatch = useDispatch();
  const fetchUrlPart = leftUrlParts.sections + projectId;
  const dataActionsReducer = sectionsActions.fetchSections;

  console.log(sections);

  const bgImageAdd = './images/projects/main_cropped.jpg';

  const filteredSections = sections.filter(section => section.building === buildingId);
  console.log(filteredSections);
  
  useEffect(() => {
    fetchData(dispatch, fetchUrlPart, dataActionsReducer);
  }, [dispatch, fetchUrlPart, dataActionsReducer]);

  return (
    <Wrap>
      <h1 className="sections__title">{`Project ${projectId}/ Building ${buildingName}/ sections`}</h1>
      <Wrap>
        {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
        ) : ( */}
        {filteredSections.map(section => (
          <NavLink key={section.id} to="/types">
            <CardWrap>
              <Section props={section} />
            </CardWrap>
          </NavLink>
        ))}
        {/* )} */}
        <NavLink to="/section/add">
          <CardWrap cardBgImage={{ bgImageAdd }}>
            <Add text={'секцию'} />
          </CardWrap>
        </NavLink>
      </Wrap>
    </Wrap>
  );
};

export default Sections;
