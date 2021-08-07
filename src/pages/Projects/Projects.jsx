import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '../../store/projects';

import { fetchData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Project from '../../components/Project/Project';
import Add from '../../components/Add/Add';
import CardWrap from '../../components/common/CardWrap/CardWrap';
import CardControls from '../../components/common/CardControls/CardControls';

// import './styles.scss';

const Projects = () => {
  const projects = useSelector(state => state.projectsArr.projects);
  const dispatch = useDispatch();
  const urlPart = leftUrlParts.projects;
  const dataActionsReducer = projectsActions.fetchProjects;

  const bgImageAdd = './images/projects/main_cropped.jpg';

  console.log(projects);

  const getData = () => fetchData(dispatch, urlPart, dataActionsReducer);

  useEffect(() => {
    getData();
    // fetchData(dispatch, urlPart, dataActionsReducer);
  // }, [dispatch, urlPart, dataActionsReducer]);
  }, []);

  return (
    <Wrap bgImage="./images/022.jpg">
      {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
      {projects.map(project => (
        <CardWrap key={project.id}>
          <Link to={`/buildings`}>
            <Project props={project} />
          </Link>
          <CardControls id={project.id} fetchData={getData} itemToDel='/project/' />
        </CardWrap>
      ))}
      {/* )} */}
      <Link to={`/project/add`}>
        <CardWrap cardBgImage={{ bgImageAdd }}>
          <Add text={'проект'} />
        </CardWrap>
      </Link>
    </Wrap>
  );
};

export default Projects;
