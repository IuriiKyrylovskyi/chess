import React from 'react';

import './styles.scss';

const CardWrap = ({ cardBgImage, children }) => {
  return (
    <div className="card">
      <div className="card__wrap" style={{ backgroundImage: `url(${cardBgImage}) 0 0 no-repeat contain` }}>
        {children}
      </div>
    </div>
  );
};

export default CardWrap;
