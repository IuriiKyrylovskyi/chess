import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, useFormik, Form, useFormikContext } from 'formik';

import { postBuilding } from '../../api/axios';

// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addpageActions } from '../../store/addpage';
// import { notificationActions } from '../../store/notification';
// import { loadingActions } from '../../store/loading';
// import axios from 'axios';

// import { baseUrl } from '../../api/baseUrl';

// import Building from '../../components/Building/Building';

import Input from '../../components/Input/Input';

import '../../components/common/common.scss';

const AddProject = () => {
  const projectId = useSelector(state => state.project.currentProjectId);
  const projects = useSelector(state => state.projectsArr.projects);

  const projectTitle = projects.slice().find(proj => proj.id === projectId);
  console.log(projectTitle);
  console.log(projectTitle.title);
  const dispatch = useDispatch();

  const initialValues = {
    id: 0,
    project: projectTitle.title,
    stage_types: '',
    tech_types: 'MONOLITHIC',
    title: '1',
  };

  const onSubmit = async values => {
    alert(JSON.stringify(values, null, 2));
    const data = {
      id: values.id,
      project: values.project,
      stage_types: values.stage_types,
      tech_types: values.tech_types,
      title: values.title,
    };
    console.log(data);
    postBuilding(dispatch, projectId, data);
  };

  return (
    <div className="addpage">
      <h1 className="addpage__title">Add building</h1>
      <div className="addpage__content">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {/* <div className="section"> */}
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form>
              <Input
                labelText={'id'}
                type="number"
                name="id"
                className="input__id"
                value={values.id}
                onChange={handleChange}
              />
              <Input
                labelText={'project'}
                type="field"
                name="project"
                className="input__project"
                value={values.project}
                onChange={handleChange}
              />
              <Input
                labelText={'stage_types'}
                as="select"
                name="stage_types"
                className="input__stage_types"
                value={values.stage_types}
                onChange={handleChange}
              >
                <option value="CONSTRUCTION">CONSTRUCTION</option>
                <option value="BUILT">BUILT</option>
                <option value="COMMISSIONED">COMMISSIONED</option>
              </Input>

              <Input
                labelText={'tech_types'}
                as="select"
                name="tech_types"
                className="input__tech_types"
                value={values.tech_types}
                onChange={handleChange}
              >
                <option value="MONOLITHIC">MONOLITHIC</option>
                <option value="BRICK">BRICK</option>
                <option value="MONOLITHIC_BRICK">MONOLITHIC_BRICK</option>
                <option value="PANEL">PANEL</option>
                <option value="BLOCKY">BLOCKY</option>
                <option value="BLOCK_PANEL">BLOCK_PANEL</option>
              </Input>
              <Input
                labelText={'title'}
                type="text"
                name="title"
                className="input__title"
                value={values.title}
                onChange={handleChange}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
          {/* </div> */}
        </Formik>
      </div>
    </div>
  );
};

export default AddProject;
