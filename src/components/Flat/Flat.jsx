import { useDispatch } from 'react-redux';
import { flatActions } from '../../store/flat';

import './styles.scss';

const Flat = ({ props }) => {
  const {
    id,
    number,
    price_m2,
    square_total_manual,
    updated,
    project,
    building,
    section,
    floor,
    flat_type,
  } = props;

  const dispatch = useDispatch();

  const flatNumber = number || 'number not given';
  const bgImage = './images/add.png';

  console.log(props);

  const handleClick = () => {
    dispatch(flatActions.getCurrentFlatId(id));
  };

  return (
    <div className="flat" onClick={handleClick}>
      <div className="flat__wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flat__title">{`Квартира ${flatNumber}`}</div>
        <div className="flat__price_m2">{`price_m2 ${price_m2}`}</div>
        <div className="flat__square_total_manual">{`square_total_manual ${square_total_manual}`}</div>
        <div className="flat__updated">{`updated ${updated}`}</div>
        <div className="flat__project">{`project ${project}`}</div>
        <div className="flat__building">{`building ${building}`}</div>
        <div className="flat__section">{`section ${section}`}</div>
        <div className="flat__floor">{`floor ${floor}`}</div>
        <div className="flat__flat_type">{`flat_type ${flat_type}`}</div>
      </div>
    </div>
  );
};

export default Flat;
