import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '../../store/projects';

import { fetchData } from '../../api/axios';
import { leftUrlParts } from '../../api/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Project from '../../components/Project/Project';
import Add from '../../components/Add/Add';
import CardWrap from '../../components/common/CardWrap/CardWrap';

// import './styles.scss';

const Projects = () => {
  const projects = useSelector(state => state.projectsArr.projects);
  const dispatch = useDispatch();
  const fetchUrlPart = leftUrlParts.projects;
  const dataActionsReducer = projectsActions.fetchProjects;

  const bgImageAdd = './images/projects/main_cropped.jpg';

  console.log(projects);

  useEffect(() => {
    fetchData(dispatch, fetchUrlPart, dataActionsReducer);
  }, [dispatch, fetchUrlPart, dataActionsReducer]);

  return (
    <Wrap bgImage="./images/022.jpg">
      {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
      {projects.map(project => (
        <NavLink key={project.id} to={`/buildings`}>
          <CardWrap>
            <Project props={project} />
          </CardWrap>
        </NavLink>
      ))}
      {/* )} */}

      <NavLink to={`/project/add`}>
        <CardWrap cardBgImage={{ bgImageAdd }}>
          <Add text={'проект'} />
        </CardWrap>
      </NavLink>
    </Wrap>
  );
};

export default Projects;
