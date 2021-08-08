import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';

import { postData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddProject = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const partUrl = leftUrlParts.projects;
  const goBackPath = '/projects';

  const initialValues = {
    title: 'Utlandia',
    address_sales_dep: '',
    city: '',
    country: '',
    developer: '',
    // project: 0,
    developer_logo: null,
    phone_sales_dep: '',
    project_img: null,
    project_logo: null,
    site: '',
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));

    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('developer', values.developer);
    if (values.file) formData.append('developer_logo', values.developer_logo);
    if (values.file) formData.append('project_logo', values.project_logo);
    if (values.file) formData.append('project_img', values.project_img);
    formData.append('city', values.city);
    formData.append('country', values.country);
    formData.append('address', values.address);
    formData.append('address_sales_dep', values.address_sales_dep);
    formData.append('phone_sales_dep', values.phone_sales_dep);
    if (values.site.length) formData.append('site', values.site);

    // console.log(history.goBack());
    console.log(partUrl);
    console.log(goBackPath);
    postData(dispatch, partUrl, history, formData, goBackPath);
  };

  return (
    <Wrap>
      <h1 className="addpage__title">Add project</h1>
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
                labelText={'title'}
                type="text"
                name="title"
                className="input__title"
                value={values.title}
                onChange={handleChange}
              />
              <Input
                labelText={'address_sales_dep'}
                type="text"
                name="address_sales_dep"
                className="input__sales-dep"
                value={values.address_sales_dep}
                onChange={handleChange}
              />
              <Input
                labelText={'city'}
                type="text"
                name="city"
                className="input__city"
                value={values.city}
                onChange={handleChange}
              />
              <Input
                labelText={'country'}
                type="text"
                name="country"
                className="input__country"
                value={values.country}
                onChange={handleChange}
              />
              <Input
                labelText={'developer'}
                type="text"
                name="developer"
                className="input__developer"
                value={values.developer}
                onChange={handleChange}
              />
              <Input
                labelText={'developer_logo'}
                type="file"
                name="developer_logo"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__developer_logo"
                value={values.developer_logo}
                onChange={handleChange}
              />
              {/* <Input
                labelText={'project'}
                type="number"
                name="project"
                className="input__project"
                value={values.project}
                onChange={handleChange}
                disabled={true}
              /> */}
              {/* <Input
                labelText={'id'}
                type="number"
                name="id"
                className="input__id"
                value={values.id}
                onChange={handleChange}
              /> */}
              {/* <Input
                labelText={'owner'}
                type="number"
                name="owner"
                className="input__owner"
                value={values.owner}
                onChange={handleChange}
              /> */}
              <Input
                labelText={'phone_sales_dep'}
                type="tel"
                name="phone_sales_dep"
                className="input__phone_sales_dep"
                value={values.phone_sales_dep}
                onChange={handleChange}
              />
              <Input
                labelText={'project_img'}
                type="file"
                name="project_img"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__project_img"
                value={values.project_img}
                onChange={handleChange}
              />
              <Input
                labelText={'project_logo'}
                type="file"
                name="project_logo"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__project_logo"
                value={values.project_logo}
                onChange={handleChange}
              />
              <Input
                labelText={'site'}
                type="url"
                name="site"
                className="input__site"
                value={values.site}
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

export default AddProject;
