import { useDispatch } from 'react-redux';
import { sectionActions } from '../../store/section';

import './styles.scss';

const Section = ({ props }) => {
  const { id, title, tech_types, stage_types } = props;

  const dispatch = useDispatch();

  const sectionTitle = title || 'title not given';
  const bgImage = './images/add.png';

  // console.log(props);

  const handleClick = () => {
    dispatch(sectionActions.getCurrentSectionId(id));
  };

  return (
    <div className="section"
      onClick={handleClick}
    >
      <div className="section__wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="section__title">{`Секция: ${sectionTitle}`}</div>
        <div className="section__tech">{tech_types}</div>
        <div className="section__stage">{stage_types}</div>
      </div>
    </div>
  );
};

export default Section;
