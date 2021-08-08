import { NavLink, useHistory } from 'react-router-dom';

import './styles.scss';

const BreadCrumbs = ({ projectId, buildingName, sectionId }) => {
  const history = useHistory();
  const currentPath = history.location.pathname.substring(1);

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {projectId && (
          <>
            <li className="breadcrumbs__item">
              <NavLink to={'/projects'}>{`Project ${projectId}`}</NavLink>
            </li>
            <li className="breadcrumbs__item">
              <span>/</span>
            </li>
          </>
        )}
        {buildingName && (
          <>
            <li className="breadcrumbs__item">
              <NavLink to={'/buildings'}>{`Building ${buildingName}`}</NavLink>
            </li>
            <li className="breadcrumbs__item">
              <span>/</span>
            </li>
          </>
        )}
        {sectionId && (
          <>
            <li className="breadcrumbs__item">
              <NavLink to={'/sections'}>{`Section ${sectionId}`}</NavLink>
            </li>
            <li className="breadcrumbs__item">
              <span>/</span>
            </li>
          </>
        )}
        <li className="breadcrumbs__item">{currentPath}</li>
        {/* {`Project ${projectId}/ Building ${buildingName}/ Section ${sectionId}/ Types`} */}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
