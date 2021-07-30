import { useDispatch } from 'react-redux';
import { planActions } from '../../store/plan';
import moment from 'moment';

import './styles.scss';

const Plan = ({ props }) => {
  const { id, flat_type, created_at, updated_at, price_m2 } = props;

  const {
    building,
    floor,
    img_extra,
    img_main,
    // levels,
    project,
    // rooms,
    section,
    square_total,
    title,
  } = flat_type;

  const created = moment(created_at).format('MMMM Do YYYY,  hh:mm');
  const updated = moment(updated_at).format('MMMM Do YYYY, hh:mm');
  const dispatch = useDispatch();
  console.log(created);
  const planType = title || 'plan type not given';
  const bgImage = img_main || img_extra || './images/add.png';

  console.log(props);

  const handleClick = () => {
    dispatch(planActions.getCurrentPlanId(id));
  };

  return (
    <div className="plan" onClick={handleClick}>
      <div className="plan__wrapper">
        <div className="plan__type" style={{ backgroundImage: `url(${bgImage})` }}>
          {title}
        </div>
        <div className="plan__content">
          <div className="plan__title">{`plan_type ${planType}`}</div>
          <div className="plan__price_m2">{`price_m2 ${price_m2}`}</div>
          <div className="plan__square_total_manual">{`square_total_manual ${square_total}`}</div>
          <div className="plan__updated">{`created on ${created}`}</div>
          <div className="plan__updated">{`updated on ${updated}`}</div>
          <div className="plan__project">{`project ${project}`}</div>
          <div className="plan__building">{`building ${building}`}</div>
          <div className="plan__section">{`section ${section}`}</div>
          <div className="plan__floor">{`floor ${floor}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
