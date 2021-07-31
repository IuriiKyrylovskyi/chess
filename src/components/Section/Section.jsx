import { useDispatch } from 'react-redux';
import { sectionActions } from '../../store/section';

import CardWrap from '../common/CardWrap/CardWrap';

import './styles.scss';

const Section = ({ props }) => {
  const { id, title, building } = props;

  const dispatch = useDispatch();

  const sectionTitle = title || 'title not given';
  const bgImage = './images/add.png';

  // console.log(props);

  const handleClick = () => {
    dispatch(sectionActions.getCurrentSectionId(id));
  };

  return (
    <div className="section" onClick={handleClick}>
      <CardWrap style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="section__title">{`Building ${building} Секция: ${sectionTitle}`}</div>
      </CardWrap>
    </div>
  );
};

export default Section;
