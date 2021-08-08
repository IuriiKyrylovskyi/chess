import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import { deleteData } from '../../../lib/api';
import { leftUrlParts } from '../../../lib/baseUrl';

import CardButton from '../CardButton/CardButton';

import './styles.scss';

const CardControls = ({ id, fetchData, itemToDel }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const partUrl = leftUrlParts.projects;

  const onDelete = () => {
    console.log(id);
    deleteData(dispatch, partUrl, id, itemToDel).then(() => fetchData());
  };

  return (
    <div className="controlls">
      <CardButton text="edit" />
      <CardButton text="delete" onClick={onDelete} />
    </div>
  );
};

export default CardControls;
