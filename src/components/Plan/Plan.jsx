import { useDispatch } from 'react-redux';
import { planActions } from '../../store/plan';

import './styles.scss';

const Plan = ({ props }) => {
  const {
    id,
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

  const planType = flat_type || 'plan type not given';
  const bgImage = './images/add.png';

  console.log(props);

  const handleClick = () => {
    dispatch(planActions.getCurrentPlanId(id));
  };

  return (
    <div className="plan" onClick={handleClick}>
      <div className="plan__wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="plan__title">{`plan_type ${planType}`}</div>
        <div className="plan__price_m2">{`price_m2 ${price_m2}`}</div>
        <div className="plan__square_total_manual">{`square_total_manual ${square_total_manual}`}</div>
        <div className="plan__updated">{`updated ${updated}`}</div>
        <div className="plan__project">{`project ${project}`}</div>
        <div className="plan__building">{`building ${building}`}</div>
        <div className="plan__section">{`section ${section}`}</div>
        <div className="plan__floor">{`floor ${floor}`}</div>
      </div>
    </div>
  );
};

export default Plan;
