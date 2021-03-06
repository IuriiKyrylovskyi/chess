import { useDispatch } from 'react-redux';
import { buildingActions } from '../../store/building';

import CardWrap from '../common/CardWrap/CardWrap';

import './styles.scss';

const Building = ({ props }) => {
  const { id, title, tech_types, stage_types, image } = props;

  const dispatch = useDispatch();

  const buildingTitle = title || 'title not given';
  const bgImage = image || './images/add.png';

  console.log(props);

  const handleClick = () => {
    dispatch(buildingActions.getCurrentBuildingId(id));
  };

  return (
    <div className="building" onClick={handleClick}>
      <CardWrap style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="building__title">{`Дом: ${buildingTitle}`}</div>
        <div className="building__tech">{tech_types}</div>
        <div className="building__stage">{stage_types}</div>
      </CardWrap>
    </div>
  );
};

export default Building;
