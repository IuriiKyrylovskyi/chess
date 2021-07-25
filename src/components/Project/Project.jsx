import React from 'react';

import './styles.scss';

const Project = ({ props }) => {
  const { id, title, project_logo, project_img, address, site } = props;

  const projectTitle = title || 'title not given';
  const bgImage = project_img || 'https://promo.utlandia.com/images/bg.jpg';
  const logo = project_logo || 'LOGO: U';
  const projectSite = site || 'https://utlandia.com/';

  console.log(props);
  return (
    <div className="project" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="project__wrapper">
        <div className="project__title">{projectTitle}</div>
        <div className="project__number">{`Project # ${id}`}</div>
        <div className="project__logo">{logo}</div>
        <div className="project__adress">{`${address || "adress isn't given"}`}</div>
        <a href={projectSite} className="project__link">
          <span>
            site:
            {projectSite}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Project;
