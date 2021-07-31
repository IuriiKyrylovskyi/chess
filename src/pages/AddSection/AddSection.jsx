import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { postData } from '../../api/axios';
import { leftUrlParts } from '../../api/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddSection = () => {
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingtId = useSelector(state => state.building.currentBuildingId);

  const dispatch = useDispatch();
  const partUrl = leftUrlParts.sections + projectId;

  const initialValues = {
    building: 0,
    id: buildingtId,
    project: projectId,
    title: 'section',
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
    const data = {
      building: values.id,
      id: values.id,
      project: projectId,
      title: values.title,
    };
    console.log(data);
    console.log(partUrl);
    postData(dispatch, partUrl, data);
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
              <Input
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
              />
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