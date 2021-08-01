import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postData } from '../../lib/api';
import { leftUrlParts } from '../../lib/baseUrl';

import Input from '../../components/common/Input/Input';

import '../../components/common/common.scss';

const AddType = () => {
  const projectId = useSelector(state => state.project.currentProjectId);
  const buildingId = useSelector(state => state.building.currentBuildingId);

  const dispatch = useDispatch();
  const history = useHistory();
  const partUrl = leftUrlParts.types + projectId;

  const initialValues = {
    id: 1,
    title: '',
    img_main: '',
    img_extra: '',
    square_total: 1,
    rooms: 1,
    levels: 1,
    property_type: '',
    project: projectId,
    building: buildingId,
    section: 1,
    floor: 1,
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
    const data = {
      id: values.id,
      title: values.title,
      img_main: values.img_main,
      img_extra: values.img_extra,
      square_total: values.square_total,
      rooms: values.rooms,
      levels: values.levels,
      property_type: values.property_type,
      project: values.project,
      building: values.building,
      section: values.section,
      floor: values.floor,
    };
    console.log(data);
    console.log(partUrl);
    postData(dispatch, partUrl, history, data);
  };

  return (
    <div className="addpage">
      <h1 className="addpage__title">Add type</h1>
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
                labelText={'building'}
                type="number"
                name="building"
                className="input__building"
                value={values.building}
                onChange={handleChange}
              />
              <Input
                labelText={'floor'}
                type="number"
                name="floor"
                className="input__floor"
                value={values.floor}
                onChange={handleChange}
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
                labelText={'img_extra'}
                type="file"
                name="img_extra"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__img_extra"
                value={values.img_extra}
                onChange={handleChange}
              />
              <Input
                labelText={'img_main'}
                type="file"
                name="img_main"
                accept=".jpeg,.jpg,.png,.svg"
                className="input__img_main"
                value={values.img_main}
                onChange={handleChange}
              />
              <Input
                labelText={'levels'}
                type="number"
                name="levels"
                className="input__levels"
                value={values.levels}
                onChange={handleChange}
              />
              <Input
                labelText={'project'}
                type="number"
                name="project"
                className="input__project"
                value={values.project}
                onChange={handleChange}
              />
              <Input
                labelText={'property_type'}
                as="select"
                name="property_type"
                className="input__property_type"
                value={values.property_type}
                onChange={handleChange}
              >
                <option value="APARTMENT">APARTMENT</option>
                <option value="PARKING">PARKING</option>
                <option value="COMMERCIAL">COMMERCIAL</option>
                <option value="STOREROOM">STOREROOM</option>
              </Input>
              <Input
                labelText={'rooms'}
                type="number"
                name="rooms"
                className="input__rooms"
                value={values.rooms}
                onChange={handleChange}
              />
              <Input
                labelText={'section'}
                type="number"
                name="section"
                className="input__section"
                value={values.section}
                onChange={handleChange}
              />
              <Input
                labelText={'square_total'}
                type="number"
                name="square_total"
                className="input__square_total"
                value={values.square_total}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddType;
