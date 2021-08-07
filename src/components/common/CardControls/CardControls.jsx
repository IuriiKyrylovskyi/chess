import { useDispatch } from 'react-redux';

import { deleteData } from '../../../lib/api';
import { leftUrlParts } from '../../../lib/baseUrl';

import CardButton from '../CardButton/CardButton';

import './styles.scss';

const CardControls = ({ id }) => {
  const dispatch = useDispatch();
  const partUrl = leftUrlParts.projects;

  const onDelete = () => {
    console.log(id);
    deleteData(dispatch, partUrl, id);
  };

  return (
    <div className="controlls">
      <CardButton text="edite" />
      <CardButton text="delete" onClick={onDelete} />
    </div>
  );
};

export default CardControls;
