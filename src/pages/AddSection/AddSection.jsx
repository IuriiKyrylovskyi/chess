import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik, Form, useFormikContext } from 'formik';

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

const AddSection = () => {
   const projectId = useSelector(state => state.project.currentProjectId);
   const buildingtId = useSelector(state => state.building.currentBuildingId);
 
  const formik = useFormik({
    initialValues: {
      building: 0,
      id: buildingtId,
      project: projectId,
      title: '2',
    },

    onSubmit(values) {
    },
  });

  return (
    <div className="addpage">
      <h1 className="addpage__title">Add section</h1>
      <div className="addpage__content">
        <Formik
        // initialValues={initialValues}
        // onSubmit={async values => alert(JSON.stringify(values, null, 2))}
        >
          <div className="section">
            <Form>
              <Input
                labelText={'building'}
                type="text"
                name="building"
                className="input__building"
                value={formik.values.building}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'id'}
                type="text"
                name="id"
                className="input__id"
                value={formik.values.id}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'project'}
                type="text"
                name="project"
                className="input__project"
                value={formik.values.project}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'title'}
                type="text"
                name="title"
                className="input__title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <button type="submit">Submit</button>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
};

export default AddSection;
