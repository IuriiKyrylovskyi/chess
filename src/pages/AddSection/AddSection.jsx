import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';

import { postData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddSection = () => {
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingtId = useSelector(state => state.building.currentBuildingId);

  const dispatch = useDispatch();
  const history = useHistory();
  const partUrl = leftUrlParts.sections;
  const goBackPath = '/sections';

  const initialValues = {
    title: 'section',
    building: buildingtId,
    project: projectId,
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
    const data = {
      title: values.title,
      building: buildingtId,
      project: projectId,
    };
    console.log(data);
    console.log(partUrl);
    postData(dispatch, partUrl, history, data, goBackPath, projectId);
  };

  return (
    <Wrap>
      <h1 className="addpage__title">Add section</h1>
      <div className="addpage__content">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
              {/* <Input
                labelText={'building'}
                type="text"
                name="building"
                className="input__building"
                value={values.building}
                onChange={handleChange}
              />
              <Input
                labelText={'id'}
                type="text"
                name="id"
                className="input__id"
                value={values.id}
                onChange={handleChange}
              />
              <Input
                labelText={'project'}
                type="text"
                name="project"
                className="input__project"
                value={values.project}
                onChange={handleChange}
              /> */}
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
        </Formik>
      </div>
    </Wrap>
  );
};

export default AddSection;
