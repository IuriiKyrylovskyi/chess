import React from 'react';

import './styles.scss';

const Wrap = ({ bgImage, children }) => {
  return (
    <div
      className="wrap"
      style={{ backgroundImage: `url(${bgImage})` || `#e9faf6` }}
    >
      {children}
    </div>
  );
};

export default Wrap;
