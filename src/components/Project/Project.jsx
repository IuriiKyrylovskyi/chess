import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { projectActions } from '../../store/project';

import './styles.scss';

const Project = ({ props }) => {
  const { id, title, project_logo, project_img, address, site } = props;

  const dispatch = useDispatch();

  const projectTitle = title || 'title not given';
  const bgImage = project_img || 'https://promo.utlandia.com/images/bg.jpg';
  const logo = project_logo || 'LOGO: U';
  const projectSite = site || 'https://utlandia.com/';

  // console.log(props);

  const handleClick = () => {
    dispatch(projectActions.getCurrentProjectId(id));
  };
  return (
    <div
      className="project"
      onClick={handleClick}
      //
    >
      <div className="project__wrapper">
        <div className="project__image-box" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="project__flats-total">{'255'} flats</div>
          <div className="project__number">{`Project # ${id}`}</div>
        </div>
        <div className="project__content">
          <div className="project__title">ЖК {projectTitle}</div>
          <div className="project__logo">{logo}</div>
          <div className="project__adress">{`${address || "adress isn't given"}`}</div>
          <a href={projectSite} target="_blank" rel="noreferrer" className="project__link">
            <span>
              site:
              {projectSite}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
