import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { postData } from '../../api/axios';
import { leftUrlParts } from '../../api/baseUrl';

import Wrap from '../../components/common/Wrap/Wrap';
import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddProject = () => {
  const dispatch = useDispatch();
  const partUrl = leftUrlParts.projects;

  const initialValues = {
    address_sales_dep: '',
    city: '',
    country: '',
    developer: '',
    project: 0,
    developer_logo: '',
    id: 0,
    owner: 1,
    phone_sales_dep: '',
    project_img: '',
    project_logo: '',
    site: '',
    title: 'Utlandia',
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
    const data = {
      address_sales_dep: values.address_sales_dep,
      city: values.city,
      country: values.country,
      developer: values.developer,
      project: values.project,
      developer_logo: values.developer_logo,
      id: values.id,
      owner: 1,
      phone_sales_dep: values.phone_sales_dep,
      project_img: values.project_img,
      project_logo: values.project_logo,
      site: values.site,
      title: values.title,
    };
    console.log(data);
    console.log(partUrl);
    postData(dispatch, partUrl, data);
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
                labelText={'id'}
                type="number"
                name="id"
                className="input__id"
                value={values.id}
                onChange={handleChange}
              />
              <Input
                labelText={'owner'}
                type="number"
                name="owner"
                className="input__owner"
                value={values.owner}
                onChange={handleChange}
              />
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

export default AddProject;
