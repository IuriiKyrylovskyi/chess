import { useDispatch } from 'react-redux';
import { typeActions } from '../../store/type';
// import moment from 'moment';

import Wrap from '../common/Wrap/Wrap';

import './styles.scss';

const Type = ({ props }) => {
  const {
    id,
    title,
    img_main,
    img_extra,
    square_total,
    rooms,
    levels,
    property_type,
    project,
    building,
    section,
    floor,
  } = props;

  // const created = moment(created_at).format('MMMM Do YYYY,  hh:mm');
  // const updated = moment(updated_at).format('MMMM Do YYYY, hh:mm');
  const dispatch = useDispatch();
  // console.log(created);
  const flatType = title || 'plan type not given';
  const bgImage = img_main || img_extra || './images/add.png';

  console.log(props);

  const handleClick = () => {
    dispatch(typeActions.getCurrentTypeId(id));
  };

  return (
    <div className="type" onClick={handleClick}>
      <Wrap>
        <h1 className="type__title">{title}</h1>
        <div className="type__type" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="type__content">
          <div className="type__title">{`type_type ${flatType}`}</div>
          <div className="type__rooms">{`rooms ${rooms}`}</div>
          <div className="type__square_total_manual">{`square_total_manual ${square_total}`}</div>
          <div className="type__levels">{`levels ${levels}`}</div>
          <div className="type__property_type">{`property_type ${property_type}`}</div>
          <div className="type__project">{`project ${project}`}</div>
          <div className="type__building">{`building ${building}`}</div>
          <div className="type__section">{`section ${section}`}</div>
          <div className="type__floor">{`floor ${floor}`}</div>
        </div>
      </Wrap>
    </div>
  );
};

export default Type;
