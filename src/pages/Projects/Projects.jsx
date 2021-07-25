import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '../../store/projects';
import { notificationActions } from '../../store/notification';
import { loadingActions } from '../../store/loading';
import axios from 'axios';

import { baseUrl } from '../../api/baseUrl';

// import { fetchProjectsData } from '../../../store/projects-actions';

import Project from '../../components/Project/Project';
import Add from '../../components/Add/Add';

import './styles.scss';

const Projects = () => {
  const projects = useSelector(state => state.projectsArr.projects);
  const dispatch = useDispatch();

  console.log(projects);

  useEffect(() => {
    axios(`${baseUrl}/projects`, {
      // params: {
      //   projects: projects,
      // },
    })
      .then(response => {
        dispatch(projectsActions.fetchProjects(response.data));
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
  }, [dispatch]);

  // const projs = [
  //   {
  //     id: '1',
  //     name: 'Utlandia 1',
  //   },
  //   {
  //     id: '2',
  //     name: 'Utlandia 2',
  //   },
  // ];

  // useEffect(() => {
  //   axios(
  //     'https://flatomark.com/api/v1/projects',
  //     // , {
  //     // params: {
  //     //   project: 1,
  //     // },
  //     // }
  //   )
  //     .then(response => {
  //       console.log(response);
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // const buildingsNumbers = [...new Set(data.map(project => project.id))];
  // console.log(buildingsNumbers);
  // console.log(buildingsNumbers.length); // for [1,2,3,...]
  // // const buildingsNumbers = [...new Set(data.map(flat => flat.building))];
  // // console.log(buildingsNumbers);
  // // console.log(buildingsNumbers.length); // for [1,2,3,...]

  // // const sectionssNumbers = [...new Set(data.map(flat => flat.section))];
  // // console.log(sectionssNumbers);
  // // console.log(sectionssNumbers.length); // for [1,2,3,...]

  return (
    <div className="projects">
      {/* {loading ? (
        <h1 styles={{ margin: '200px auto' }}>Loading...</h1>
      ) : ( */}
      {projects.map(project => (
        <NavLink key={project.id} to={`/projects/buildings`}>
          <Project props={project} />
        </NavLink>
      ))}
      {/* )} */}
      <Link to={`/projects/add`}>
        <Add text={'проект'} />
      </Link>
    </div>
  );
};

export default Projects;
