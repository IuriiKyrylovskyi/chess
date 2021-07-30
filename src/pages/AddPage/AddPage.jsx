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

import './styles.scss';
import Input from '../../components/Input/Input';

const AddPage = () => {
  const formik = useFormik({
    initialValues: {
      address_sales_dep: '',
      city: '',
      country: '',
      developer: '',
      developer_logo: '',
      id: 1,
      owner: 1,
      phone_sales_dep: '',
      project_img: '',
      project_logo: '',
      site: '',
      title: 'Utlandia',
    },

    onSubmit(values) {
      // Do stuff here...
    },
  });

  return (
    <div className="addpage">
      <h1 className="addpage__title">Add project</h1>
      <div className="addpage__content">
        <Formik
        // initialValues={initialValues}
        // onSubmit={async values => alert(JSON.stringify(values, null, 2))}
        >
          <div className="section">
            <Form>
              <Input
                labelText={'address_sales_dep'}
                type="text"
                name="address_sales_dep"
                className="input__sales-dep"
                value={formik.values.address_sales_dep}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'city'}
                type="text"
                name="address_sales_dep"
                className="input__city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'country'}
                type="text"
                name="country"
                className="input__country"
                value={formik.values.country}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'developer'}
                type="text"
                name="developer"
                className="input__developer"
                value={formik.values.developer}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'developer_logo'}
                type="file"
                name="developer_logo"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__developer_logo"
                value={formik.values.developer_logo}
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
                labelText={'owner'}
                type="text"
                name="owner"
                className="input__owner"
                value={formik.values.owner}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'phone_sales_dep'}
                type="tel"
                name="phone_sales_dep"
                className="input__phone_sales_dep"
                value={formik.values.phone_sales_dep}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'project_img'}
                type="file"
                name="project_img"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__project_img"
                value={formik.values.project_img}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'project_logo'}
                type="file"
                name="project_logo"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__project_logo"
                value={formik.values.project_logo}
                onChange={formik.handleChange}
              />
              <Input
                labelText={'site'}
                type="url"
                name="site"
                className="input__site"
                value={formik.values.site}
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

export default AddPage;
