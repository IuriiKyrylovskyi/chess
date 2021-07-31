import React, { useEffect } from 'react';
import { Formik, useFormik, Form, useFormikContext } from 'formik';

// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addpageActions } from '../../store/addpage';
// import { notificationActions } from '../../store/notification';
// import { loadingActions } from '../../store/loading';
// import axios from 'axios';

// import { baseUrl } from '../../api/baseUrl';

// import Building from '../../components/Building/Building';

import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddType = () => {
  const formik = useFormik({
    initialValues: {
      building: 3,
      floor: 3,
      id: 3,
      img_extra: '',
      img_main: '',
      levels: 3,
      project: 3,
      property_type: 'APARTMENT',
      rooms: 3,
      section: 3,
      square_total: 100,
      title: 'C2 1Б',
    },

    onSubmit(values) {
      // Do stuff here...
    },
  });

  return (
    <div className="addpage">
      <h1 className="addpage__title">Add type</h1>
      <div className="addpage__content">
        <Formik
        // initialValues={initialValues}
        // onSubmit={async values => alert(JSON.stringify(values, null, 2))}
        >
          <div className="section">
            <Form>
              <Input
                labelText={'title'}
                type="text"
                name="title"
                className="input__title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'building'}
                type="text"
                name="building"
                className="input__building"
                value={formik.values.building}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'floor'}
                type="text"
                name="floor"
                className="input__floor"
                value={formik.values.floor}
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
                labelText={'img_extra'}
                type="file"
                name="img_extra"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__img_extra"
                value={formik.values.img_extra}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'img_main'}
                type="file"
                name="img_main"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__img_main"
                value={formik.values.img_main}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'levels'}
                type="text"
                name="levels"
                className="input__levels"
                value={formik.values.levels}
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
                labelText={'property_type'}
                type="text"
                name="property_type"
                className="input__property_type"
                value={formik.values.property_type}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'rooms'}
                type="number"
                name="rooms"
                className="input__rooms"
                value={formik.values.rooms}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'section'}
                type="text"
                name="section"
                className="input__section"
                value={formik.values.section}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'square_total'}
                type="number"
                name="square_total"
                className="input__square_total"
                value={formik.values.square_total}
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

export default AddType;
