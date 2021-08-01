import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';

import { postData } from '../../api/axios';
import { leftUrlParts } from '../../api/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddBuilding = () => {
  const projectId = useSelector(state => state.project.currentProjectId);

  const dispatch = useDispatch();
  const history = useHistory();
  const partUrl = leftUrlParts.types + projectId;

  const initialValues = {
    id: 0,
    project: projectId,
    stage_types: '',
    tech_types: 'MONOLITHIC',
    title: '1',
  };

  const onSubmit = async values => {
    alert(JSON.stringify(values, null, 2));
    const data = {
      id: values.id,
      project: projectId,
      stage_types: values.stage_types,
      tech_types: values.tech_types,
      title: values.title,
    };
    console.log(data);
    console.log(partUrl);
    postData(dispatch, partUrl, history, data);
  };

  return (
    <Wrap>
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
                  type="number"
                  name="project"
                  className="input__project"
                  value={values.project}
                  onChange={handleChange}
                  disabled={true}
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
                <button type="submit">Submit</button>
              </Form>
            )}
            {/* </div> */}
          </Formik>
        </div>
      </div>
    </Wrap>
  );
};

export default AddBuilding;
